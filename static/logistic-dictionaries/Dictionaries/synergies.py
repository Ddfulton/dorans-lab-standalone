import json

f = open("main_champ.txt")
main_dict = json.loads(f.read())

f = open("synergy.txt")
synergy_dict = json.loads(f.read())

f = open("counter.txt")
counter_dict = json.loads(f.read())


print(main_dict)

def get_main(blue, red):
    blue_row = []
    red_row = []
    for i in blue:
        blue_row += [str(i) + ': ' + str(main_dict[i])]
    for j in red:
        red_row += [str(j) + ': ' + str(main_dict[j])]
    return (blue_row, red_row)

def get_synergy(blue,red):
    blue_syn = []
    red_syn = []
    for i in range(0,4):
        for m in range(i+1, 5):
            blue_syn += [blue[i] + ' and ' + blue[m] + ': ' + str(synergy_dict[blue[i]][blue[m]])]
            red_syn += [red[i] + ' and ' + red[m] + ': ' + str(synergy_dict[red[i]][red[m]])]
        
    return (blue_syn, red_syn)

def get_counter(blue,red):
    counter_row = []
    for i in range(0,5):
        for j in range(0,5):
            if blue[i] < red[j]:
                if counter_dict[blue[i]][red[j]] > 0:
                    counter_row += [blue[i] + ' counter ' + red[j] + ': ' + str(counter_dict[blue[i]][red[j]])]
                else:
                    counter_row += [red[j] + ' counter ' + blue[i] + ': ' + str(-counter_dict[blue[i]][red[j]])]
            if blue[i] > red[j]:
                if counter_dict[red[j]][blue[i]] > 0:
                    counter_row += [red[j] + ' counter ' + blue[i] + ': ' + str(counter_dict[red[j]][blue[i]])]
                else:
                    counter_row += [blue[i] + ' counter ' + red[j] + ': ' + str(-counter_dict[red[j]][blue[i]])]
    return counter_row