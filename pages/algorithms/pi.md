# Simple Algorithm to calculate PI

## Description

This algorithm calculates the value of π using the following principle:

<pre> 1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + ... </pre>

## Implementation

### Python:

```python	
def calculate_pi(iterations):
    pi = 0
    sign = 1

    for i in range(iterations):
        denominator = 2 * i + 1
        term = sign / denominator
        pi += term
        sign *= -1

    return 4 * pi
```

### JS:

```javascript
function calculate_pi(iterations) {
    let pi = 0;
    let sign = 1;
    let denominator, term;
    for (let i = 0; i < iterations; i++) {
        denominator = 2 * i + 1;
        term = sign / denominator;
        pi += term;
        sign *= -1;
    }
    return 4 * pi;
}
```