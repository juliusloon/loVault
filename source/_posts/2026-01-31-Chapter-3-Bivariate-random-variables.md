---
title: Chapter-3-Bivariate-random-variables
tags:
  - PMS
date: 2026-01-31 00:00:03
---

$X = X(\omega), Y = Y(\omega), (X, Y)$ is a bivariate random variable
#### **Bivariate discrete random variable**
##### joint mass function
$$P\{ X = x_i, Y = y_j\} = p_ij, \ i, j = 1, 2, …$$
monotone increase
continuous on the right
$$F\{ a<X≤b, c<Y≤d\} = F(b,d) - F(b,c) -F(a,d) +F(a,c)$$
##### marginal mass function
$$P\{X = x_i\} = P(\bigcup ^{+ \infty}_{j =1} \{ X = x_i, Y =y_j\}) = \sum ^{+ \infty}_{j= 1} p_{ij} \triangleq p_{i \cdot}, i =1, 2, …$$$\Rightarrow$ $F(x_i, + \infty)$ probabilities that $x =x_i$, all $y$

|                |       |               |               | $Y$ |               |     | $P\{X = x_i\}$ |
| -------------- | ----- | ------------- | ------------- | --- | ------------- | --- | -------------- |
|                |       | $y_1$         | $y_2$         | …   | $y_j$         | …   |                |
|                | $x_1$ | $p_{11}$      | $p_{12}$      | …   | $p_{1j}$      | …   | $p_{1\cdot}$   |
|                | $x_2$ | $p_{21}$      | $p_{22}$      | …   | $p_{2j}$      | …   | $p_{2\cdot}$   |
| $X$            | …     | …             | …             |     | …             |     | …              |
|                | $x_i$ | $p_{i1}$      | $p_{i2}$      | …   | $p_{ij}$      | …   | $p_{i\cdot}$   |
|                | …     | …             | …             |     | …             |     | …              |
| $P\{Y = y_j\}$ |       | $p_{\cdot 1}$ | $p_{\cdot 2}$ | …   | $p_{\cdot j}$ | …   | $1$            |
##### conditional mass function
given $Y = y_j$, the conditional mass function of $X$ is $$P\{X =x_i|Y =y_j\} = \frac{p_{ij}}{p_{\cdot j}}, i, j= 1, 2, …$$likewise, given $X = x_i$, the conditional mass function of $Y$ is $$P\{ Y = y_j | X =x_i \} = \frac{p_{ij}}{p_{i \cdot}}, i,j = 1,2,…$$
> [!important]  **e.g.1 The joint mass function of** $(x, y)$ **is $F(x,y) = \left \{ \begin{array} {ll} 0 & , x<0 \text{ or } y<0 \\ 0.5y &, 0≤x<1, 0≤y<1 \\ y & ,x≥1, 0≤y<1 \\0.5 & ,0≤ x<1, y≥1 \\ 1 & , x≥1, y≥1 \end{array} \right.$, solve: (1)** $F_X(x), F_Y(y)$**; (2)** $P(X≤0.5, Y>0.5)$.
> (1) from definition, when $x<0, F_X(x) = F(x, + \infty) =0$; and so we gets $F_X(x), F_Y(y)$. 
> (2) $P(X≤ 0.5, Y>0.5) = P(X≤ 0.5) - P(X≤0.5, Y≤0.5) =F_X(0.5) - F(0.5, 0.5)$.

> [!important]  **e.g.2 The probability of a shooter concentrates on the target is** $p (0<p<1)$**, and he shoots until he hit the target twice. Let** $X$ **be the times of shooting until he first hits the target and** $Y$ **be the total times of shooting, solve: (1) the joint mass function of** $X$ **and** $Y$**; (2) the marginal mass function of** $X$ **and** $Y$**; (3) the conditional mass function of** $X$ **and** $Y$.
>  (1) $P(s, t) = P(X=s)P(Y=t|X=s) = q^{s-1}\cdot p \cdot q^{t-s-1}\cdot p = p^2 q^{t-2}$ 
>  (2) $P_X(s) = pq^{s-1}$ (directly get or through $Y=t$) $P_Y(t) = C^{1}_{t-1}pq^{t-2}p = (t-1)p^2q^{t-2}$ 
>  (3) $P(X=s|Y=t) = \frac{P(s, t)}{P_Y(t)} = \frac{1}{t-1}, s= 1,2,…,t-1$. $P(Y=t|X=s) = \frac{P(s,t)}{P_X(s)} = pq^{t-s-1}$. 
>  We see in (1) that $P(s,t)$ is irrelevant with $s$, therefore for given $t$, any $s$ has a same $p$ 
>  $\Rightarrow$ in (3) we have that $P(X=s|Y=t) = \frac{P(s, t)}{P_Y(t)} = \frac{1}{t-1}$ has a value irrelevant with $s$.
#### Bivariate continuous random variable
##### joint probability density function
$f(x,y)$ that satisfies $F(x, y) = \int^x_{- \infty} \int ^y_{- \infty}f(u,v)dudv$
(1) $$\int^{\infty}_{- \infty} \int^{\infty}_{ -\infty} f(x, y)dxdy =1$$
(2) $$P\{(X, Y) \in D\} = \iint_{D} f(x,y)dxdy$$
(3) at continuous point of $f(x, y)$, $$\frac{\partial ^2 F(x, y)}{\partial x \partial y} = f(x,y)$$
##### marginal probability density function
$$F_X(x) = P\{ X≤x\} = \int^{x}_{- \infty} dx \int^{+ \infty}_{- \infty} f(x, y)dy$$
$$\Longrightarrow f_X(x) = \int ^{+ \infty}_{- \infty}f(x, y)dy$$

$$\Longrightarrow f_Y(y) = \int ^{+ \infty}_{- \infty} f(x, y)dx$$
##### conditional probability density function
given $Y=y$, the conditional probability mass function of $X$ is $$f_{X|Y}(x|y) = \frac{f(x, y)}{f_Y(y)}$$
likewise given $X=x$, the conditional probability mass function of $Y$ is $$f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}$$
> Derivation: this in fact corresponds with the uniform definition of $F_{X|Y}(x|y)$  
> $$F_{X|Y}(x|y) = P(X\le x|Y=y) =\lim _{\epsilon \rightarrow 0^+}\frac{P(X\le x, y<Y<y+ \epsilon)}{P(y<Y<y+\epsilon)}$$
> therefore  
> $$F_{X|Y}(x|y) =\lim _{\epsilon \rightarrow 0^+}\frac{P(X\le x, y<Y<y+ \epsilon)}{P(y<Y<y+\epsilon)} = \lim _{\epsilon \rightarrow 0^+}\frac{F(x, y+ \epsilon)-F(x,y)}{F_Y(y+\epsilon)-F_Y(y)} = \lim _{\epsilon \rightarrow 0^+}\frac{\frac{F(x, y+ \epsilon)-F(x,y)}{\epsilon}}{\frac{F_Y(y+\epsilon)-F_Y(y)}{\epsilon}} =\frac{\frac{\partial F(x,y)}{\partial y}}{F'_Y(y)}$$

$$= \frac{\frac{\partial(\int ^{y}_{- \infty}\int^x_{- \infty}f(u, v)dudv)}{\partial y}}{f_Y(y)}=\frac{\int ^{x}_{- \infty}f(u, y)du}{f_Y(y)} = \int ^{x}_{- \infty}\frac{f(u, y)}{f_Y(y)}du$$
> take derivative of both sides, then $$f_{X|Y}(x|y) = \frac{f(x, y)}{f_Y(y)}$$


> [!important]   **e.g.3** $X \sim U(0,1),$ **when** $X=x(0<x<1), Y \sim U(x,1)$**, solve** $f_Y(y)$.
> $$f_{Y|X}(y|x) = \left \{ \begin{array} {lcr} \frac{1}{1-x} & , x<y<1 \\ 0 & , \text{elsewhile} \end{array} \right.,\ f_X(x) = \left \{ \begin{array} {lcr}1 & , 0<x<1 \\ 0 & ,\text{elsewhile} \end{array} \right.$$
> Given that $$f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}$$then $$f(x, y) = \left \{ \begin{array} {lcr} \frac{1}{1-x} & , 0<x<y<1 \\ 0 & , \text{elsewhile} \end{array} \right.,\ f_Y(y) = \int ^{+ \infty}_{- \infty} f(x, y)dx = \int ^{y}_{0} \frac{1}{1-x} dx = -\ln (1-x) |^y_0 = - \ln (1-y)$$
> 

##### Independence of random variables
$$F(x, y) = F_X(x)F_Y(y)$$
$\iff p_{ij} =p_ip_j$ (discrete)
$\iff f(x, y) = f_X(x)f_Y(y)$ (continuous)

> if $X$and $Y$are independent, and $h, g$ are continuous functions, then $h(X), g(Y)$ are independent.

##### Bivariate uniform distribution
$(X, Y) \sim U(D)$
$$f(x, y)= \left \{ \begin{array} {lcr} \frac{1}{S_D} & , (x, y)\in D \\ 0 & , \text{elsewhile} \end{array} \right.$$
if $(X,Y) \sim U(a,b)\times(c,d),$ then $X\sim U(a,b), Y \sim U(c,d)$, and $X, Y$ are independent

**Bivariate uniform** $\not \rightarrow$ **1-D uniform, but bivariate normal**$\rightarrow$ **1-D normal**

##### Bivariate normal distribution
$$(X, Y) \sim N(\mu_1, \mu_2; \sigma_1^2, \sigma_2^2; \rho)$$
$$f(x,y) = \frac{1}{2\pi \sigma_1 \sigma_2 \sqrt{1- \rho^2}} e^{-\frac{1}{2(1- \rho^2)}[(\frac{x-\mu_1}{\sigma_1})^2 - \frac{2\rho (x-\mu_1)(x-\mu_2)}{\sigma_1\sigma_2}+(\frac{y-\mu_2}{\sigma_2})^2]}$$
$$(X, Y) \sim N(\mu_1, \mu_2; \sigma_1^2, \sigma_2^2; \rho) \Rightarrow X\sim N(\mu_1, \sigma_1^2), Y\sim N(\mu_2, \sigma_2^2)$$not true if inverted

> This property means that the marginal probability density distribution is irrelevant with their $\rho$.  
> Derivation:  
> $$f_X(x) = \int^{+\infty}_{-\infty} f(x,y)dy = \int^{+\infty}_{-\infty} \frac{1}{2\pi \sigma_1 \sigma_2 \sqrt{1- \rho^2}} e^{-\frac{1}{2(1- \rho^2)}[(\frac{x-\mu_1}{\sigma_1})^2 - \frac{2\rho (x-\mu_1)(x-\mu_2)}{\sigma_1\sigma_2}+(\frac{y-\mu_2}{\sigma_2})^2]}dy$$
> $$=\int^{+\infty}_{-\infty}\frac{1}{2\pi \sigma_1 \sigma_2 \sqrt{1- \rho^2}}e^{-\frac{1}{2(1- \rho^2)}(\frac{y-\mu_2}{\sigma_2}-\rho\frac{x-\mu_1}{\sigma_1})^2-\frac{(x-\mu_1)^2}{2\sigma_1^2}}dy$$ $$\overset{t\equiv\frac{1}{\sqrt{1-\rho^2}}(\frac{y-\mu_2}{\sigma_2}-\rho\frac{x-\mu_1}{\sigma_1})}=\int^{+\infty}_{-\infty}\frac{1}{2\pi \sigma_1 \sigma_2 \sqrt{1- \rho^2}}e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}e^{-\frac{t^2}{2}}\sigma_2\sqrt{1-\rho^2}dt= \frac{1}{\sqrt{2\pi}\sigma_1}e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}, -\infty<x<+\infty$$
> similarly, $$f_Y(y) = \frac{1}{\sqrt{2\pi}\sigma_1}e^{-\frac{(y-\mu_2)^2}{2\sigma_2^2}}, -\infty <y<+\infty$$

**only for normal distribution:** $X, Y$ is independent $\iff X, Y$ is irrelevant $(\rho =0)$
$$(X, Y) \sim N(\mu_1, \mu_2; \sigma_1^2, \sigma_2^2; \rho) \Rightarrow aX+bY \sim N(a\mu_1+b\mu_2, (a\sigma_1)^2+(b\sigma_2)^2+2ab\rho\sigma_1\sigma_2)$$

$$\Longrightarrow X\sim N(\mu_1, \sigma_1^2), Y\sim N(\mu_2, \sigma_2^2),X, Y\text{ are independent, then }aX+bY \sim N(a\mu_1+b\mu_2, (a\sigma_1)^2+(b\sigma_2)^2)$$
#### Distribution of function of bivariate random variable
##### Discrete bivariate random variable

##### Continuous bivariate random variable
$$(X,Y) , f(x,y), Z =g(x,y)$$Method 1: **Distribution function**
Step 1: Let distribution of $Z$ be $F_Z(z)$, then $$F_Z(z) = P\{Z\le z\} = P\{g(X,Y)\le z\}$$Step 2: solve out the range $(\alpha, \beta)$ of $g(X,Y)$, then discuss the value of $z$
(i) $$z<\alpha$, $F_Z(z) =0$$
(ii) $$\alpha<z<\beta, F_Z(z) = \iint_{g(x, y)\le z}f(x, y)dxdy$$
(iii) $$z>\beta$, $F_Z(z) =1$$
Step 3: $$f_Z(z) =F'_Z(z)$$
Method 2:**Convolution Formula**
(1) $Z=aX+bY$, then $$f_Z(z) = \int^{+\infty}_{-\infty} \frac{1}{|b|} f(x, \frac{z-ax}{b})dx = \int^{+ \infty}_{ -\infty} \frac{1}{|a|}f(\frac{z-by}{a}, y)dy$$
> Derivation: $$F_Z(z) = P\{aX+bY\le z\}=\int^{+\infty}_{-\infty}dy\int^{+\infty}_{-\infty}f(x,y)dx \overset{ax+by\equiv u}=\int^{+\infty}_{-\infty}d(\frac{u-ax}{b})\int^{+\infty}_{-\infty}f(x,\frac{u-ax}{b})dx$$

$$=\frac{1}{|b|}\int^{z}_{-\infty}du\int^{+\infty}_{-\infty}f(x,\frac{u-ax}{b})dx$$
> take derivation of both sides, then$$f_Z(z) = \frac{1}{|b|}\int^{+\infty}_{-\infty}f(x,\frac{z-ax}{b})dx \overset{\text{same way}}{=} \frac{1}{|a|}\int^{+\infty}_{-\infty}f(\frac{z-by}{a}, y)dy$$

(2) $Z = XY,$ then $$f_Z(z) = \int^{+\infty}_{-\infty} \frac{1}{|x|} f(x, \frac{z}{x})dx == \int^{+\infty}_{-\infty} \frac{1}{|y|} f(\frac{z}{y},y)dy$$
(3) $Z=\frac{Y}{X}$, then $$f_Z(z) = \int^{+\infty}_{-\infty} {|x|}f(x,xz)dx$$$Z=\frac{X}{Y}$, then $$f_Z(z) = \int^{+\infty}_{-\infty} |y|f(yz,y)dy$$
**Conclusion:**$$f_Z(z) = |\frac{\partial y(x, z)}{\partial z}| \int^{+\infty}_{-\infty} f(x, y(x,z))dx= |\frac{\partial x(y,z)}{\partial z}|\int^{+\infty}_{-\infty}f(x(y,z),y)dy$$
#### function of one discrete and one continuous random variables
##### distribution of extremum function
$X_1, X_2, … X_n$ are independent of each other with distribution function respectively $F_{X_1}(x), F_{X_2}(x),…,F_{X_n}(x)$, then the distribution function of
(1) $\max\{X_1, X_2, … X_n\}$
$$F_{\max}(x) = P\{ \max\{X_1, X_2, … X_n\}\le x\} = P\{ X_1\le x, X_2\le x, …, X_n \le x\}$$
$$\overset{\text{independence}}= P\{X_1\le x\}P\{X_2\le x\}...P\{X_n\le x\} = F_{X_1}(x)F_{X_2}(x)…F_{X_n}(x)= \prod^{n}_{i=1}F_{X_i}(x)$$
(2) $\min \{ X_1, X_2, … X_n \}$
$$F_{\min}(x) = P\{ \min\{X_1, X_2, … X_n\}\le x\} = 1-P\{ \min\{X_1, X_2, … X_n\}\ge x\}$$
$$= 1 -P\{ X_1\ge x, X_2\ge x, …, X_n \ge x\} \overset{\text{independence}}= 1-(1-F_{X_1}(x))(1-F_{X_2}(x))…(1-F_{X_n}(x))$$
specially, if $X_1, X_2, … X_n$ are independent and identically distributed with distribution function $F(x)$, then
$$F_{\max}(x) = [F(x)]^n, F_{\min}(x)= 1-[1-F(x)]^n$$and easily we can get the probability density.

> [!important]  **e.g.4** $X_i(i =1, 2, ...,n)\sim B(1,p)$ **are independent, prove** $X_1+X_2+…+X_n \sim B(n,p)$.

> [!important]  **e.g.5** $X \sim B(n_1, p), Y\sim B(n_2, p)$ **are independent, prove** $X+Y \sim B(n_1+n_2, p)$.
> Hint: $$(p+q)^{n_1+n_2} = (p+q)^{n_1}(p+q)^{n_2} \rightarrow C^{k}_{n_1+n_2} = \sum^{k}_{i=0} C^{i}_{n_1}C^{k-i}_{n_2}$$

> [!important]  **e.g.6** $X\sim \pi(\lambda_1), Y\sim\pi (\lambda_2)$ **are independent, prove** $X+Y \sim \pi (\lambda_1+\lambda_2)$.