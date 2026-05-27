---
title: Chapter-1-Random-event-and-Probability
tags:
  - PMS
date: 2026-01-31 00:00:01
---

#### De Morgan’s law
$$\overline{\bigcup^{n}_{j=1}}A_j = \bigcap^{n}_{j=1}\overline{A_j}, \overline{\bigcap^{n}_{j=1}}A_j = \bigcup^{n}_{j=1}\overline{A_j}$$
Simplified ver.
$$\overline{A\cup B} = \bar{A} \bar{B}, \overline{AB} = \bar{A}\cup \bar{B}$$
#### Commutative law
**Associative law**
$$A\cup (B\cup C) = (A \cup B)\cup C, A\cap (B\cap C) = (A\cap B)\cap C$$
**Distributive law**
$$A(B\cup C) = (AB)\cup (AC), (AB)\cup C = (A\cup C)(B\cup C)$$
#### Subtraction formula
$$P(A- B) = P(A)-P(AB)$$
specially, if $B\subset A$, then $$P(A- B) = P(A)-P(B)$$
#### Addition formula
$$P(A\cup B) = P(A) +P(B)-P(AB)$$
$$P(A\cup B \cup C) = P(A)+P(B)+P(C)-P(AB) -P(AC)-P(BC)+P(ABC)$$


> [!important]  **e.g.1 $P(AB)=P(\bar{A}\bar{B}), P(A)=r, \text{then } P(B) = ?$**

> [!important]  **e.g.2 $P(A)=P(B)=P(C) =0.4,$ the probability that at least two of A, B, C happens is 0.3, and the probability that all them happens is 0.05. solve the probability that none of them happens.**

> [!important]  **e.g.3 On n cards are numbers 1~n, after random arrangement, solve the probability that at least one card has its order is the same of its number.**
> $A_i=$ {the $i$ th card has a number $i$} $$P(A)=P(A_1 \cup A_2 \cup ...\cup A_n) = \sum P(A_i) -\sum P(A_i A_j)+...+(-1)^{n-1}P(A_1 A_2...A_n)$$
> Since each card is equivalent to each other, then the formula equals to$$C_n^1P(A_1)-C_n^2P(A_1A_2)+...+C_n^nP(A_1...A_n)$$in which $$P(A_1)= \frac{1}{n}, P(A_1A_2)=\frac{1}{n(n-1)}, ... ,P(A_1...A_k) = \frac{(n-k)!}{n!}$$
> Therefore, the formula equals $$\sum(-1)^{k-1}C^k_n\frac{(n-k)!}{n!}= \sum(-1)^{k-1}\frac{n!}{(n-k)!k!}\frac{(n-k)!}{n!} = \sum \frac{(-1)^{k-1}}{k!}\overset{\text{Taylor's formula}}{=}\frac{1}{e}$$

#### Conditional probability
**Multiplication formula**
$$P(AB)=P(B)P(A|B)=P(A)P(B|A)$$
$$P(A_1A_2A_3...A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1A_2)...P(A_n|A_1A_2...A_{n-1})$$

> [!important]  **e.g.4 In bag A are 7 red balls and 3 white balls, while bag B is empty. Now randomly grab 3 balls from A into B. Solve: (1) the probability that a ball randomly grabbed from B is red: (2)randomly grab a ball from B, then put it back and grab a ball again, the probability that it is red; (3)randomly grab a ball from B, grab a ball again, the probability that it is also red; (4)randomly grab a ball from B, and it is red, grab a ball again, the probability that it is also red.**
> B is previously empty, therefore its probability of balls is the **same** as A → (1)(2)(3) is 0.7 
> (4)
> Method 1 
> $A_i=$ {get a red ball from B at the $i$ th chance} $B_i =$ {there are $i$ red balls in the 3 balls given from A} $$P(A_1)=\sum^3_{n=0}P(B_i)P({A_1|B_i}) = 0.7$$

$$P(A_1A_2) = \sum^3_{n=0}P(B_i)P({A_1A_2|B_i}) = \frac{7}{15}$$

$$P(A_2|A_1) = \frac{P(A_1A_2)}{P(A_1)} = \frac{2}{3}$$
> Method 2 
> same as we discussed in (1)~(3), B’s probability is the same as A, therefore after knowing we select out a red ball, the probability goes to $\frac{7-1}{10-1}= \frac{2}{3}$.

> **Principle of lottery**
> If the results are unseen, then the probability is irrelevant with the sequence.


#### Law of total probability
$$P(A)=P(AS)=P(A(B_1\cup B_2\cup...\cup B_n))=\sum^n_{i=1}P(B_i)P(A|B_i)$$
#### Bayes formula
$P(B_k)$ is often called **Prior probability**, as its value is presumed from experience.
$P(B_k|A)$ is often called **Posterior probability**, as we revise the value through the presence of event A.
$$P(B_k|A)=\frac{P(B_kA)}{P(A)} = \frac{P(B_k)P(A|B_k)}{\sum^n_{i=1}{P(B_i)P(A|B_i)}}$$
#### Incompatibility
$$AB=\emptyset \rightarrow P(AB)=0$$not true in reverse.
#### Independence of events
$P(AB) = P(A)P(B) \iff$ $A, B$ is independent
$$\iff P(A|B)=P(A) \iff P(\bar A|B)=P(\bar A)\iff ...$$
$$\iff P(A|B)+P(\bar{A}|\bar{B})=1$$
$n$ **events are independent of each other**
$$P(A_1)P(A_2)P(A_3)…P(A_n) = P(A_1A_2A_3…A_n)$$
$n$ **events are pairwise independent**
$$\forall i, j \in \{ 1, 2,... ,n\},P(A_iA_j)=P(A_i)P(A_j)$$