import random
# random.seed(31)


class CVRP:
    def __init__(self, locations, vehicle_capacity):
        """
        location is 2D array, with students, latitude and longitude
        vehicles capacity. 
        """
        self.locations = locations
        self.vehicle_capacity = vehicle_capacity
        self.vehicles = {0:
                         {'capacity': self.vehicle_capacity,
                          'visited': [],
                          'city': None,
                          'filled': 0
                          }}
        self.current_point = 0

    def print_vehicles(self, verbose=None):
        filled = 0
        capacity = 0
        for p in self.vehicles.values():
            filled += p['filled']
            capacity += p['capacity']
            if verbose == None:
                print(p)
        print("Filled ", filled, "Capacity ", capacity)
        return filled

    def print_locations(self, verbose=None):
        students = 0
        for city in self.locations:
            for loc in city['locations']:
                if verbose == None:
                    print(loc)
                students += loc['students']
        print('Students ', students)
        return students

    def add_point(self):
        self.vehicles[len(self.vehicles)] = {
            'capacity': self.vehicle_capacity,
            'visited': [],
            'city': None,
            'filled': 0
        }

    def generate_using_while(self):
        _c = 0

        random.shuffle(self.locations)
        while(_c < len(self.locations)):
            city = self.locations[_c]['city']
            locations = self.locations[_c]['locations']
            random.shuffle(locations)
            _l = 0
            while(_l < len(locations)):
                # print(city, locations[_l])
                if self.vehicles[self.current_point]['capacity'] == locations[_l]['students']:
                    self.vehicles[self.current_point]['city'] = city
                    self.vehicles[self.current_point]['visited'].append(_l)
                    self.vehicles[self.current_point]['capacity'] = 0
                    self.vehicles[self.current_point]['filled'] = locations[_l]['students']
                    locations[_l]['students'] = 0
                    self.current_point += 1
                    self.add_point()
                elif self.vehicles[self.current_point]['capacity'] < locations[_l]['students']:
                    self.vehicles[self.current_point]['city'] = city
                    self.vehicles[self.current_point]['visited'].append(_l)
                    locations[_l]['students'] -= self.vehicles[self.current_point]['capacity']
                    self.vehicles[self.current_point]['filled'] = self.vehicle_capacity
                    self.vehicles[self.current_point]['capacity'] = 0
                    self.add_point()
                    self.current_point += 1
                elif self.vehicles[self.current_point]['capacity'] > locations[_l]['students']:
                    self.vehicles[self.current_point]['city'] = city
                    self.vehicles[self.current_point]['visited'].append(_l)
                    self.vehicles[self.current_point]['capacity'] -= locations[_l]['students']
                    self.vehicles[self.current_point]['filled'] += locations[_l]['students']
                    locations[_l]['students'] = 0

                if locations[_l]['students'] > 0:
                    continue
                _l += 1
            # print('+++')
            # self.print_vehicles(verbose=None)
            # input()
            _c += 1
            # if _c < len(locations):
            self.current_point += 1
            self.add_point()

    def vehicle_count(self):
        return len(self.vehicles)

def cost_function(vehicles, locations):
    # printer(vehicles.values())
    # printer(locations)
    start = {'latitude': 25.42067559148342, 'longitude': 68.26494265567848}
    # print(".")
    total_distance = 0
    for vehicle in vehicles.values():
        visited_city = vehicle['city']
        visited_locations = vehicle['visited']
        visited_locations_data = None
        for x in locations:
            if x['city'] == visited_city:
                visited_locations_data = x['locations']
        if visited_city:
            # print(visited_city, visited_locations)
            # print(visited_locations_data)
            _dist = 0
            slat, slon = start.values()
            for vl in visited_locations:
                elat = visited_locations_data[vl]['latitude']
                elon = visited_locations_data[vl]['longitude']
                dist = cal(slat, slon, elat, elon)
                slat = elat
                slon = elon
                _dist += dist
        # each point in km
        total_distance += _dist
    return total_distance


def cal(slat, slon, elat, elon):
    from math import radians, sin, cos, acos
    slat = radians(float(slat))
    slon = radians(float(slon))
    elat = radians(float(elat))
    elon = radians(float(elon))
    dist = 6371.01 * acos(sin(slat)*sin(elat) + cos(slat)
                          * cos(elat)*cos(slon - elon))
    return dist


def printer(obj):
    print("")
    for o in obj:
        print(o)
