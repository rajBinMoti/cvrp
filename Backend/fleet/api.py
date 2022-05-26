from django.db.models.aggregates import Count
from fleet.models import City, Location, PickUpPoint, Semester
from rest_framework import viewsets, permissions
from .serializers import CitySerializer, LocationSerializer, PickUpPointSerializer, SemesterSerializer
import random


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = CitySerializer


class SemesterViewSet(viewsets.ModelViewSet):
    queryset = Semester.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SemesterSerializer


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = LocationSerializer


class PickUpPointViewSet(viewsets.ModelViewSet):
    queryset = PickUpPoint.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = PickUpPointSerializer


def printer(obj):
    print("")
    for o in obj:
        print(o)


def pup(pickuppoints):
    if pickuppoints == None:
        return None
    dictionary = {}
    for p in pickuppoints:
        idx = p[0]
        value = p[1]
        dictionary[idx] = value
    return dictionary


def loc_(locations):
    if locations == None:
        return None
    dictionary = {}
    for i, p in enumerate(locations):
        dictionary[i] = {
            'idx': p[0],
            'name': p[1],
            'city_id': p[2],
            'longitude': float(p[3]),
            'latitude': float(p[4])
        }
    return dictionary


def cit(cities):
    if cities == None:
        return None
    dictionary = {}
    for i, p in enumerate(cities):
        dictionary[i] = {
            'idx': p[0],
            'name': p[1],
        }
    return dictionary


# class SolutionViewSet(viewsets.ViewSet):
#     permissions_classes = [permissions.AllowAny]


#     # print(pup(pickuppoints))
#     # print(loc(locations))
#     # print(cit(cities))
#     def get_locations():
#         semester = Semester.objects.get(pk=1)
#         cities = City.objects.filter(active=True).values_list('id', 'name')
#         locations = Location.objects.filter(active=True).values_list(
#             'id', 'name', 'city_id', 'longitude', 'latitude')
#         pickuppoints = PickUpPoint.objects.values_list(
#             'location_id').annotate(Count('location_id'))
#         pickuppoints = pup(pickuppoints)
#         locations = loc_(locations)
#         cities = cit(cities)
#         _locations = []
#         for city in cities.values():
#             _dic = {}
#             _dic['city'] = city['name']
#             _dic['locations'] = []
#             for idx_loc, loc in enumerate(locations.values()):
#                 if city['idx'] == loc['city_id']:
#                     _dic['locations'].append({ 'longitude': loc['longitude'], 'latitude': loc['latitude'], 'students': pickuppoints[int(idx_loc+1)]})
#                     # print(int(idx_loc), pickuppoints[int(idx_loc+1)])
#                     # print(_dic)
#                     # input()
#             if len(_dic['locations']) > 0:
#                 _locations.append(_dic)
#         return _locations

#     from .tool import cvrp_file

#     # set
#     # obj = cvrp_file.CVRP(_locations, 80)
#     # obj.generate_using_while()
#     # cost = obj.cost_function(obj.vehicles, obj.locations)

#     POP_SIZE = 90
#     GENERATIONS = 300
#     Model = cvrp_file.CVRP
#     CostFun = cvrp_file.cost_function
#     pop = []
#     for p in range(POP_SIZE):
#         m = Model(get_locations(), 80)
#         m.generate_using_while()
#         pop.append({'population': m, 'fitness': CostFun(m.vehicles, m.locations)})

#     def cross_over(p_i, p_ii):
#         k = random.randint(0, len(p_i['population'].locations)-1)
#         name = p_i['population'].locations[k]['city']
#         same1 = []
#         other1 = []
#         for i in p_i['population'].vehicles.values():
#             if i['city'] == name:
#                 same1.append(i)
#             else:
#                 other1.append(i)
#         same2 = []
#         other2 = []
#         for i in p_ii['population'].vehicles.values():
#             if i['city'] == name:
#                 same2.append(i)
#             else:
#                 other2.append(i)

#         c_i = { i:x for i, x in enumerate(same1 + other2)}
#         c_ii = { i:x for i, x in enumerate(same2 + other1)}
#         p_i['population'].vehicles = c_i
#         p_ii['population'].vehicles = c_ii
#         return p_i, p_ii

#     def mutation(c):
#         vehicles = c['population'].vehicles
#         for vehicle in vehicles.values():
#             if len(vehicle['visited']) > 1:
#                 vehicle['visited'][0], vehicle['visited'][1] = vehicle['visited'][1], vehicle['visited'][0]
#         return c

#     def repair(pop, size):
#         for step in range(size):
#             min_idx = step
#             for i in range(step+ 1, size):
#                 if pop[i]['fitness'] < pop[min_idx]['fitness']:
#                     min_idx = i
#             pop[step], pop[min_idx] = pop[min_idx], pop[step]


#     printer(pop)
#     for i in range(GENERATIONS):
#         new_population = []
#         for j in range(POP_SIZE):
#             # print(j)
#             p_i = pop[random.randint(0, POP_SIZE-1)]
#             p_ii = pop[random.randint(0, POP_SIZE-1)]
#             # print(CostFun(p_i['population'].vehicles, p_i['population'].locations) )
#             # print(CostFun(p_ii['population'].vehicles, p_ii['population'].locations) )
#             c_i, c_ii = cross_over(p_i, p_ii)
#             c_i = mutation(c_i)
#             c_ii = mutation(c_ii)
#             new_population.append(c_i)
#             new_population.append(c_ii)
#         # print(len(new_population))
#         # print(len(pop))

#         # evaluate and repair
#         pop = []
#         for p in new_population:
#             pop.append({'population': m, 'fitness': CostFun(p['population'].vehicles, p['population'].locations)})

#         repair(pop, len(pop))
#         pop = pop[:POP_SIZE]
#         _ = [p['fitness'] for p in pop]
#         _min = min(_)
#         _worst = max(_)
#         _avg = sum(_)/len(_)
#         print('Generation', i, _min, _worst, _avg)
#     printer(pop)


#     # for p in pop:
#     #     # p.print_locations()
#     #     p.generate_using_while()
#     #     # p.print_locations()
#     #     # p.print_vehicles()
#     #     print(p.cost_function(p.vehicles, p.locations), p.vehicle_count())
