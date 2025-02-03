import axios from "axios"; 
import { getDigitSum, getIsPerfect, getIsPrime, getNumberProperties } from "../utils/mathUtils.js";

export const classifyNumber = async (req, res) => {
    try {
        const { number } = req.query; 
        const num = parseInt(number, 10); 

        if (isNaN(num)) {
            return res.status(400).json({
                number: "alphabet", 
                error: true
            })
        }

        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`); 
        const funFact = funFactResponse.data; 

        res.status(200).json({
            "number": num, 
            "is_prime": getIsPrime(num), 
            "is_perfect": getIsPerfect(num), 
            "properties": getNumberProperties(num),
            "digit_sum": getDigitSum(num), 
            "fun_fact": funFact

        })
    } catch(error) {
        console.log("Error fetching fun fact:", error.message); 
        res.status(500).json({
            error: "Failed to fetch fun fact. Please try again later"
        })

    }
}

