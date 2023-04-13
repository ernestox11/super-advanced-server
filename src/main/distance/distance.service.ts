// import { Injectable } from '@nestjs/common';
// import { CreateDistanceDto } from './dto/create-distance.dto';
// import { UpdateDistanceDto } from './dto/update-distance.dto';

// @Injectable()
// export class DistanceService {
//   create(createDistanceDto: CreateDistanceDto) {
//     return 'This action adds a new distance';
//   }

//   findAll() {
//     return `This action returns all distance`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} distance`;
//   }

//   update(id: number, updateDistanceDto: UpdateDistanceDto) {
//     return `This action updates a #${id} distance`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} distance`;
//   }
// }
import { Injectable } from '@nestjs/common';
import * as haversine from 'haversine';

@Injectable()
export class DistanceService {
  findShortestPath(
    coordinates: {
      receptionPointID: string;
      latitude: string;
      longitude: string;
    }[],
  ) {
    // Calculate the distance between each pair of points
    const distances = coordinates.map((pointA, indexA) =>
      coordinates.map((pointB, indexB) => {
        if (indexA === indexB) return 0;
        return haversine(
          { latitude: pointA.latitude, longitude: pointA.longitude },
          { latitude: pointB.latitude, longitude: pointB.longitude },
          { unit: 'meter' },
        );
      }),
    );

    // Use Dijkstra's algorithm to find the shortest path
    const unvisited = new Set(coordinates.keys());
    const previous = new Array(coordinates.length);
    const distance = new Array(coordinates.length).fill(Infinity);
    distance[0] = 0;

    while (unvisited.size > 0) {
      let current = -1;
      for (const i of unvisited) {
        if (current === -1 || distance[i] < distance[current]) {
          current = i;
        }
      }
      unvisited.delete(current);

      for (const [i, d] of distances[current].entries()) {
        if (unvisited.has(i)) {
          const alt = distance[current] + d;
          if (alt < distance[i]) {
            distance[i] = alt;
            previous[i] = current;
          }
        }
      }
    }

    // Build the path
    let current = 0;
    const path = [current];
    while (previous[current] != null) {
      current = previous[current];
      path.push(current);
    }

    // Return the sorted array of objects with the new property 'distanceToNextPoint'
    return path.map((i, index) => ({
      ...coordinates[i],
      distanceToNextPoint:
        index === path.length - 1 ? 0 : distances[i][path[index + 1]],
    }));
  }
}
