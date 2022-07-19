# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# # This one kind of works, but returns the values as strings and not as an array
# def arrayWords array, letter
#     array.each do |value|
#         if value.include? letter
#             puts value
#         end
#     end
# end

def arrayWords array, letter
    output = []

    array.each do |value|
        if value.include? letter
            # This append operator saved me. Thank you syllabus!!
            output << value
        end
    end
    return output
end

p arrayWords(beverages_array, letter_o) # Output: ["coffee", "soda water"]
p arrayWords(beverages_array, letter_t) # Output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum array
    array.sum
end

# puts sum nums_array1 # Output: 76
# puts sum nums_array2 # Output: 100



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels=2, current_speed=0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster speed
        @current_speed += speed
    end

    def brake speed
        if @current_speed - speed >= 0
            @current_speed -= speed
        else
            "Can't brake less then zero speed!"
        end

    end

end

bike = Bike.new("Trek")
# p bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."

bike2 = Bike.new("Mountain", 8, 100)
# p bike2.bike_info
# Output: "The Mountain bike has 8 wheels and is going 100 mph."



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

p bike.bike_info # Output: "The Trek bike has 2 wheels and is going 0 mph."
p bike.pedal_faster 20 # Output: 20
p bike.bike_info # Output: "The Trek bike has 2 wheels and is going 20 mph."
p bike.brake 20 # 0
p bike.brake 5 # Output: "Can't brake less then zero speed!"