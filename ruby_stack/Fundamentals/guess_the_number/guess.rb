def guess_number guess 
    number = 25
    if number == guess
        puts "You got it!"
    elsif number > guess
        puts "Guess too low"
    else number < guess
        puts "Guess too high"

    end
end

puts guess_number 25