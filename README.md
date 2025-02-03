# **Number Classification API**

## **Overview**

This API provides detailed information about a given number, including its **mathematical properties** and a **fun fact**. It supports **positive** and **negative integers**, with cached responses for better performance using **Redis**. The API is fast, scalable, and returns the information in **JSON format**.

---

## **Features**

- **Mathematical Properties**:
  - **Prime**: Checks if the number is a prime number.
  - **Perfect**: Determines if the number is a perfect number.
  - **Armstrong**: Identifies Armstrong numbers.
  - **Even/Odd**: Identifies whether the number is even or odd.
  - **Digit Sum**: Sums the digits of the number (supports both positive and negative integers).

- **Fun Fact**: Fetches a fun fact about the number from the [Numbers API](http://numbersapi.com/).

- **Caching**: Redis is used to cache results for improved performance.

---

## **Installation**

### 1. **Clone the repository**
```sh
git clone git remote add origin https://github.com/detayotella/number-clasification-api.git
cd number-classification-api
```

### 2. **Install dependencies**
```sh
npm install
```


---

## **Environment Variables**

Make sure to set up a `.env` file with the following variables:

```
PORT=3000
```

---

## **Usage**

Start the API server:

```sh
npm start
```

The API will be accessible at `http://localhost:3000`.

---

## **Endpoints**

### **GET `/api/classify-number?number=<number>`**

This endpoint accepts a number and returns a classification of the number, including mathematical properties and a fun fact.

#### **Query Parameters**
- `number`: The number to classify (can be positive or negative).

#### **Response Format**

```json
{
  "number": <number>,
  "is_prime": <boolean>,
  "is_perfect": <boolean>,
  "properties": ["armstrong", "even"|"odd"],
  "digit_sum": <number>, // sum of its digits
  "fun_fact": "<fun fact>"
}
```

#### **Example Response**

For a number **371**:
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

For an invalid number (e.g., an alphabet):
```json
{
  "number": "alphabet",
  "error": true
}
```

---

## **Mathematical Properties**

- **Prime**: A number that is only divisible by 1 and itself.
- **Perfect**: A number that is equal to the sum of its proper divisors.
- **Armstrong**: A number that is equal to the sum of its digits raised to the power of the number of digits in it.
- **Even/Odd**: A number is even if it is divisible by 2, otherwise, it is odd.
- **Digit Sum**: The sum of all digits of the number, treating negative numbers as positive for the sum.


## **Contributing**

Feel free to fork the repository and make improvements! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**

- [Numbers API](http://numbersapi.com/) for providing fun facts about numbers.
- Node.js community for creating efficient libraries like `axios`.

