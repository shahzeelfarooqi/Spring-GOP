import json

with open('HouseSample.geojson', 'r') as data_file:
    data = json.load(data_file)


#del data["features"][0]["properties"]
#print(data)

def iterdict(d):
    for k,v in d.items():
        if isinstance(v, dict):
            iterdict(v)
        else:
            print("nothis")

#iterdict(data)


with open('HouseSample.geojson','r') as string:
    my_dict=json.load(string)
string.close()
def iterate_multidimensional(my_dict):
    for k,v in my_dict.items():
        if(isinstance(v,dict)):
            print(k+":")
            iterate_multidimensional(v)
            continue
        print(k+" : "+str(v))
iterate_multidimensional(my_dict)