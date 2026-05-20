---
title: Chapter-2-1D-Random-variables
tags:
  - PMS
date: 2026-01-31 00:00:02
---

#### Distribution function
$$F(x) = P\{ X ≤ x\}$$﻿
(1) $F(-\infty)=0$﻿, $F(\infty) = 1$﻿
(2) monotone increase
(3) continuous on the right

> [!important]  **e.g.1 $F(x) = \left \{ \begin{array}{rcl} A+Be^{-x}, x>0 \\ 0, x\leq 0 \end{array}\right.$, solve A, B.**
> $F(0) = 0 = F(0+) = A+B$ $F(+ \infty) = A = 1$ $B = 0- A = -1$
  
(4) $P\{ a< X \leq b\} = F(b) - F(a)$﻿
(5) $P\{ X<x \} = F(x-), P\{X=x\} = F(x)-F(x-)$﻿
#### Discrete random variable
**Probability mass function**

| X   | $x_1$ | $x_2$ | …   | $x_k$ | …   |
| --- | ----- | ----- | --- | ----- | --- |
| P   | $p_i$ | $p_2$ | …   | $p_k$ | …   |
$$F(x) = P \{X ≤ x \} = \sum _{x_i \leq x} p_i$$﻿
#### Continuous random variable
**probability density function**
$f(x)$﻿ that satisfies $F(x) = \int ^{x} _{-\infty} f(t)dt$﻿
(1) $P \{ X=x\} = F(x) - F(x-) = 0$﻿
(2) $\int ^{+\infty}_{-\infty} f(x)dx=1$﻿
(3) $P \{ a< x≤b\} = \int^b_a f(x)dx$﻿, here the $<$﻿ equals $\leq$﻿, from (1)
(4) at continuous points, $F'(x) = f(x)$﻿
#### Eight major distributions
##### 0-1 distribution
$X \sim B(1,p)$﻿
##### Binary distribution
$X \sim B(n,p)$﻿
$Y = n-X \sim B(n, 1-p)$﻿
Generally, if $(n+1) p \in N$﻿, the most probable value of $X$﻿ is $(n+1)p$﻿ and $(n+1)p-1$﻿; if not, it is $[(n+1)p]$﻿

> [!important]  **e.g.2 $P(X=1) = P(X=2) = 0.5$, when $X = x$, $Y\sim P(x)$, solve: (1) $P(Y≥1)$; (2) $P(X=1|Y≥1)$.**
> $Y|X = x \sim P(x)$, define $Y|X = x$ as $Z_x$. then $$P(z_x = k) = \frac{x^k e^{-x}}{k!}, k =0, 1, 2, …$$
> (1)$$P(Y≥1) = P(X=1)P(Y≥1|X=1)+P(X=2)P(Y≥1|X+1) \\= \frac{1}{2}(P(Z_1\ge 1)+P(Z_2 \ge1)) = ...$$
> (2)$$P(X=1|Y≥1) = \frac{P(X=1)P(Y≥1|X=1)}{P(Y≥1)} = ...$$


##### Poisson distribution
$X \sim P(\lambda)$﻿
$$P \{ X=k\} = \frac{e^{-\lambda}\lambda^{k}}{k!}, k=0,1, 2,...$$﻿
> Derivation: Poisson distribution could be derived from **binary distribution**, when $n → +\infty$﻿  
> $$\begin{aligned} C_n^k p^k (1-p)^{n-k} = \frac{n!}{(n-k)!k!} p^k (1-p)^{n-k} =& \frac{1}{k!}(1-\frac{1}{n})…(1-\frac{k-1}{n})(np)^k(1-p)^{n-k} \\ \overset{\text{when }n \rightarrow + \infty, \text{ the fraction part}\rightarrow1 }{=}& \frac{1}{k!}(np)^k(1-p)^{n-k}= \frac{1}{k!}(np)^k(1-p)^{-\frac{1}{p}(kp-np)} \\=& \frac{1}{k!}(np)^ke^{(kp-np)}\overset{n \gg k}{=}\frac{1}{k!}(np)^ke^{-np} \overset{\lambda = np}{=} \frac{e^{-\lambda}\lambda^{k}}{k!}\end{aligned}$$﻿

> [!important]  **e.g.3 the number of clients to the store each day is a random variant** $X \sim P(\lambda)$**, the probability of each client shopping is** $p$**, and each client is independent of one another. Solve the probability distribution of the number of clients shopping in the store each day(** $Y$**).**
> $$P(Y= k) = \sum ^{+ \infty}_{n= k} P(X=n)P(Y=k|X=n) =\sum^{+ \infty}_{n=k}\frac{e^{-\lambda}\lambda^{n}}{n!}C^{k}_{n}p^k(1-p)^{n-k}$$
> $$=\sum^{+ \infty}_{n=k}\frac{e^{-\lambda}\lambda^{n}}{n!}\frac{n!}{k!(n-k)!}p^k(1-p)^{n-k}= \frac{(\lambda p)^k e^{-\lambda}}{k!} \sum^{+\infty}_{n=k} \frac{(\lambda q)^{n-k}}{(n-k)!}\overset{\sum^{+\infty}_{n=k}\frac{\lambda q)^{n-k}}{(n-k)!} = \sum^{+\infty} _{n=0}\frac{\lambda q)^{n}}{n!}= e^{\lambda q}}{=} \frac {(\lambda q-\lambda}{k!}=\frac{(\lambda p)^k e^{-\lambda p}}{k!}$$therefore, $$Y \sim P(\lambda p)$$

##### Geometric distribution
$X \sim G(p)$﻿
$$P\{ X=k\} = p(1-p)^{k-1}, k=1, 2, …$$﻿
Memoryless property:
$$\forall m, n \in N^{*}, P(X>m+n) = P(X =m)P(X>n), P(X=m+n) = P(X =m)P(X=n)$$﻿
##### Hypergeometric distribution
$X \sim H(N, M, n)$﻿
$N$﻿ products, $M$﻿ rejects in total and select $n$﻿ pieces.
$$P\{X=k\} = \frac{C^{k}_M C^{n-k}_{N-M}}{C^n_N}, k =0,1, ..., min(n,M)$$﻿
##### Uniform distribution
$X \sim U(a, b)$﻿
$$f(x) = \left \{ \begin{array}{lcr} \dfrac{1}{b-a} &, a<x<b \\ 0 &, \text{elsewhile} \end{array}\right.$$﻿$$F(x) = \left \{ \begin{array}{lcr} 0 & , x<a \\ \dfrac{x-a}{b-a}&, a\le x<b \\ 1 &, x\ge b \end{array}\right.$$==**Pay attention to that whether the interval is entirely covered or partly 0**==
##### Exponential distribution
$X \sim E(\lambda)$﻿
$$f(x) = \left \{ \begin{array}{lcr} \lambda e^{- \lambda x} & ,x>0 \\ 0 & , x≤0 \end {array} \right.$$$$F(x) = \left \{ \begin{array} {lcr} 1- e^{-\lambda x} & , x>0 \\ 0 & , x≤0 \end{array} \right.$$﻿
Memoryless property:
$$\forall s, t >0, P(X>s+t|X>s) = P(X>t), P(X\le s+t|X>s) = P(0 <X \le t)$$﻿

> $\Gamma$﻿ integral:
> $$\Gamma(s) = \int^{+ \infty}_{0} x^{s-1}e^{-x}dx, s>0\\ \Gamma (s+1) = s \Gamma (s)$$
> $$\Gamma (\frac{1}{2}) = \sqrt{\pi}; \Gamma (1) = 1\\ \forall n \in N^*, \Gamma(n+1) = n!$$﻿
> $$\Gamma (s) \in C(0,+\infty), \Gamma(s) \in C^\infty (0,+\infty).$$﻿
> $\Gamma (s), \ln \Gamma (s)$﻿ are strictly convex function on $(0, +\infty)$﻿.

> $B$﻿ integral: $$B(p,q) = \int^1_0 x^{p-1}(1-x)^{q-1}dx$$

##### Normal distribution
$X \sim N(\mu, \sigma^2)$﻿
$$f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\dfrac{(x-\mu)^2}{2\sigma^2}}, |x|<+\infty$$
$$F(x) = \int^{x}_{+ \infty} \frac{1}{\sqrt{2\pi} \sigma} e^{-\dfrac{(t-\mu)^2}{2\sigma^2}} dt$$﻿
$$\xlongequal{\mu =0, \sigma ^2 =1} X \sim N(0,1) \text{ -- Standard normal distribution}$$
for standard normal distribution, $$f(x) \Rightarrow \phi(x), F(x) \Rightarrow \Phi(x)$$
$$\Phi (-x) = 1 - \Phi(x)$$﻿
$$P\{|X|<x\} = 2\Phi (x) -1$$﻿
Standardisation: $X \sim N(\mu, \sigma^2),$﻿ then $$\frac{X-\mu}{\sigma} \sim N(0, 1)$$﻿
#### Distribution of function of random variant
##### function of Discrete random variant

##### function of Continuous random variant
random variant $X$﻿, $f_X(x)$﻿, $Y = g(x)$﻿
Method 1: 
from $F$﻿ to $f$﻿, note that segments of $y$﻿ is determined by $x$﻿
$$F_Y(y) = P\{Y ≤ y\} = P\{g(x)≤y \} = \int_{g(x)≤y} f_X{x}dx$$
$$f_Y(y) = F_Y'(y)$$
Method 2:
$y =g(x)$﻿ is **monotone** in $X$﻿’s positive probability density interval with range $(\alpha, \beta)$﻿, and its inverse function is $x = h(y)$﻿,then
$$f_Y(y) = \left \{ \begin{array} {rcl} f_X(h(y))|h’(y)| & , \alpha <y < \beta \\ 0&, \text{elsewhile} \end{array} \right.$$
especially used when $y = g(x)$﻿ is segmentally monotone in $[a, b]$﻿

> Derivation: when $g(x)$﻿ is monotone increase, $$f_Y(y) = F_Y'(y) = P'\{Y ≤ y\} = P'\{g(x)≤y \} = P'(x\le h(y)) = F'_X(h(y)) = f_X(h(y))|h'(y)|$$﻿

> [!important]  **e.g.4 $f(x) = \left \{ \begin{array} {lcr}\frac{x}{8} & , 0<x<4 \\ 0 & , elsewhile \end{array} \right., Y = X^2,$ solve $f_Y(y)$.**
> $f(x)$ is monotone, therefore $Y$ is also monotone.
> $Y = X^2$, then $$x= h(y) = \sqrt{y}, 0<y <16,\ f_Y(y) = f_X(h(y))|h'(y)|,\ 0<x<4,\to 0<y<16$$$$f_Y(y) = f_X(h(y))|h'(y)|= \frac{\sqrt{y}}{8}\frac{1}{2\sqrt{y}}=\frac{1}{16}$$ 
> therefore, $$f_Y(y) = \left \{ \begin{array} {lcr}\frac{1}{16} & , 0<y<16 \\ 0 & , elsewhile \end{array} \right.$$

> [!important]  **e.g.5** $X \sim N(\mu, \sigma^2), Y=aX +b(a≠0)$**, solve** $f_Y(y)$.
> $$f_Y(y) = F_Y'(y) = P'\{Y ≤ y\} = P'\{g(x)≤y \} = P'(X\le\frac{Y-b}{a}) = F'_X(\frac{Y-b}{a}) = |\frac{1}{a}|f_X(\frac{Y-b}{a})=...$$$$\Rightarrow Y \sim N(a\mu+b, (a\sigma)^2)$$


> [!important]  **e.g.6** $X \sim E(\lambda), Y = F(X),$ **prove:** $Y \sim U(0,1)$.
> $Y = F(X) = \left \{ \begin{array} {lcr} 1-e^{-\lambda x} & , x>0 \\ 0 & ,x \le 0 \end{array} \right.$, therefore $Y \in [0, 1)$ 
> $$F_Y(y) = P(Y \le y) = P(1-e^{-\lambda x} \le y) = P(x \le - \frac{\ln(1-y)}{\lambda}) = F_X(- \frac{\ln(1-y)}{\lambda}) = 1-e^{-\lambda (- \frac{\ln(1-y)}{\lambda})} = y$$
> therefore $Y \sim U(0,1)$


> [!important]  **e.g.7 The number of broken ends that occur in a spinning machine at any given time interval** $t$**(min)** $N(t) \sim P(\lambda t)$**, solve: (1) the probability that the first broken end occurs 10min after; (2) the probability density of the time interval between two broken ends** $Y$**(min).**
> (1) $$P(N(10) = 0) = \frac{e^{-10\lambda}(10\lambda)^{0}}{0!} = e^{-10\lambda}$$
> (2) $$F_Y(y) = P(Y≤y) = 1- P(Y>y) = 1-P(N(y) = 0) = 1 - \frac{(\lambda y)^0 e^{-\lambda y}}{0!}= 1-e^{-\lambda y}$$
> therefore, $Y \sim E(\lambda)$.


> [!important]  **e.g.8** $X \sim U(-1, 2), Y=X^2$**. solve** $f_Y(y)$**.** 
> $f_X(x) = \left \{ \begin{array} {lcr} \frac{1}{3} &, -1<x<2 \\ 0 & , \text{elsewhile} \end{array} \right.$ 
> (i) $y≤0\text{ or }y≥4, f_Y(y) =0$ 
> (ii) ==$0<y<1,f_Y(y) = f_X(h(y))|h'(y)|= f_X(\sqrt{y})|\frac{1}{2\sqrt{y}}|= \frac{1}{6\sqrt{y}}$== **WRONG!** $y$ **is not monotone** 
> $0<y<1, F_Y(y) = P(Y<y) = P(x^2<y) = F_X(\sqrt{y})-F_X(-\sqrt{y})$ **take derivative of both sides:** $f_Y(y) = f_X(\sqrt{y})|\frac{1}{2\sqrt{y}}|-f_X(-\sqrt{y}) |\frac{1}{-2\sqrt{y}}|=\frac{1}{3\sqrt{y}}$ 
> (iii) $1<y<4,$ then $x \in (1, 2)$, where $y = (x)$ is monotone, easily we get $f_Y(y) = \frac{1}{6\sqrt{y}}$. therefore, $f_Y(y) = \left \{ \begin{array} {lcr} \frac{1}{3\sqrt{y}} & , 0<y<1 \\ \frac{1}{6\sqrt{y}} & ,1 \le y<4 \\0 & , \text{elsewhile} \end{array} \right.$




