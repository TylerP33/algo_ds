n = 10

def extraLongFactorials(n)

if n <= 1
	return 1
end

return n * extraLongFactorials(n - 1)

end


puts extraLongFactorials(n)
