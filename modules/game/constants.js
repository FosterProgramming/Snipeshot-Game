export const Ores = {
		"A": {
			"value": 1,
			"hp": 1,
			"image": "copper.png"

		},
		"B": {
			"value": 2,
			"hp": 2,
			"image": "titanium.png"
		},
		"C": {
			"value": 3,
			"hp":3,
			"image": "red_square.png"
		},
		"D": {
			"value": 4,
			"hp":1,
			"image": "blue_square.png"
		}
}
export const Layers = [
	{"cost": 0, "ores": {"A": 0.75, "B": 0.2, "C": 0.05}},
	{"cost": 100, "ores": {"B": 0.75, "C": 0.2, "D": 0.05}},
	{"cost": 1000, "ores": {"C": 0.75, "D": 0.25}},
	{"cost": 5000, "ores": {"D": 1}}
]

export const Smelters = {
	"A": {
		"base_capacity": 1,
		"base_efficiency": 10,
		"base_time": 10000
	},
	"B": {
		"base_capacity": 1,
		"base_efficiency": 10,
		"base_time": 10000
	},
	"C": {
		"base_capacity": 1,
		"base_efficiency": 10,
		"base_time": 10000
	},
	"D": {
		"base_capacity": 1,
		"base_efficiency": 10,
		"base_time": 10000
	},

}

export const Smelter_Load_Time = 5000 //in milliseconds
export const Max_Ores = 3
