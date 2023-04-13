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
  //   findShortestPath(coordinates) {
  //     const R = 6371e3; // Earth's radius in meters
  //     let sortedCoordinates = [coordinates[0]];
  //     let remainingCoordinates = coordinates.slice(1);

  //     while (remainingCoordinates.length > 0) {
  //       let minDistance = Infinity;
  //       let minIndex = -1;
  //       let lastCoordinate = sortedCoordinates[sortedCoordinates.length - 1];
  //       for (let i = 0; i < remainingCoordinates.length; i++) {
  //         let currentCoordinate = remainingCoordinates[i];
  //         let lat1 = lastCoordinate.latitude * (Math.PI / 180);
  //         let lat2 = currentCoordinate.latitude * (Math.PI / 180);
  //         let deltaLat =
  //           (currentCoordinate.latitude - lastCoordinate.latitude) *
  //           (Math.PI / 180);
  //         let deltaLon =
  //           (currentCoordinate.longitude - lastCoordinate.longitude) *
  //           (Math.PI / 180);

  //         let a =
  //           Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
  //           Math.cos(lat1) *
  //             Math.cos(lat2) *
  //             Math.sin(deltaLon / 2) *
  //             Math.sin(deltaLon / 2);
  //         let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //         let distance = R * c;

  //         if (distance < minDistance) {
  //           minDistance = distance;
  //           minIndex = i;
  //         }
  //       }
  //       sortedCoordinates.push(remainingCoordinates.splice(minIndex, 1)[0]);
  //       sortedCoordinates[sortedCoordinates.length - 2].distanceToNextPoint =
  //         minDistance;
  //     }
  //     sortedCoordinates[sortedCoordinates.length - 1].distanceToNextPoint = 0;

  //     return sortedCoordinates.map((coordinate) => ({
  //       receptionPointID: coordinate.receptionPointID,
  //       distanceToNextPoint: coordinate.distanceToNextPoint,
  //     }));
  //   }
  findShortestPath(coordinates) {
    // Calculate the distance between two points
    function getDistance(lat1, lon1, lat2, lon2) {
      const R = 6371e3; // Earth's radius in meters
      const φ1 = lat1 * (Math.PI / 180);
      const φ2 = lat2 * (Math.PI / 180);
      const Δφ = (lat2 - lat1) * (Math.PI / 180);
      const Δλ = (lon2 - lon1) * (Math.PI / 180);

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    }

    // Find the shortest path using the Nearest Neighbor algorithm
    let shortestPath = [];
    let currentPoint = coordinates[0];
    let remainingPoints = coordinates.slice(1);

    while (remainingPoints.length > 0) {
      let nearestPoint = remainingPoints[0];
      let nearestDistance = getDistance(
        currentPoint.latitude,
        currentPoint.longitude,
        nearestPoint.latitude,
        nearestPoint.longitude,
      );

      for (let i = 1; i < remainingPoints.length; i++) {
        let point = remainingPoints[i];
        let distance = getDistance(
          currentPoint.latitude,
          currentPoint.longitude,
          point.latitude,
          point.longitude,
        );

        if (distance < nearestDistance) {
          nearestPoint = point;
          nearestDistance = distance;
        }
      }

      shortestPath.push({
        startingReceptionPointID: currentPoint.receptionPointID,
        endingReceptionPointID: nearestPoint.receptionPointID,
        distanceBetweenPoints: nearestDistance,
      });

      currentPoint = nearestPoint;
      remainingPoints = remainingPoints.filter(
        (point) => point !== nearestPoint,
      );
    }

    // Add the last leg of the journey back to the starting point
    shortestPath.push({
      startingReceptionPointID: currentPoint.receptionPointID,
      endingReceptionPointID: coordinates[0].receptionPointID,
      distanceBetweenPoints: getDistance(
        currentPoint.latitude,
        currentPoint.longitude,
        coordinates[0].latitude,
        coordinates[0].longitude,
      ),
    });

    return shortestPath;
  }
}
