### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById → শুধু একটা element return করে (id দিয়ে)।
getElementsByClassName → একাধিক element return করে (HTMLCollection)।
querySelector → CSS selector দিয়ে প্রথম element return করে।
querySelectorAll → CSS selector দিয়ে সব element return করে (NodeList)।

2. How do you create and insert a new element into the DOM?

Answer:
document.createElement() দিয়ে বানাও।
Text বা attribute দাও।
DOM-এ insert করো (appendChild, before, after, ইত্যাদি)।

3. What is Event Bubbling and how does it work?

Answer:
Event bubbling মানে → event child থেকে শুরু হয়ে parent, তারপর grandparent পর্যন্ত যায়।

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation হলো parent element এ event বসানো, যাতে child element এর event গুলোও handle হয়।

5. What is the difference between preventDefault() and stopPropagation()?

Answer:
preventDefault() → element এর default কাজ বন্ধ করে।
stopPropagation() → event কে parent এ propagate হতে দেয় না।
