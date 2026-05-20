---
title: Chapter-6-First-steps-to-Statistics
date: 2026-01-31 00:00:00
---

#### Population $X$﻿ & Individual
##### Finite population & Infinite individual
###### Simple random sample
$X_1, X_2, …, X_n$﻿ are **independent** and **identically distributed with** $X$﻿, then call $X_1, X_2, …, X_n$﻿ (simple random) samples from $X$﻿, $n$﻿ sample size, call sample observations $x_1, x_2, …, x_n$﻿ sample values.
###### Statistic
$X_1, X_2, …, X_n$﻿ are samples from $X$﻿, $g(X_1, X_2, …, X_n)$﻿ are a function of $X_1, X_2, …, X_n$﻿ with no unknown parameters, then $g(X_1, X_2, …, X_n)$﻿ is a statistic, the distribution of a statistic is called sampling distribution.
###### Common Statistics
(1) sample mean: $\bar X =\frac{1}{n}\sum^n_{i=1}X_i$﻿
(2) sample variance: $S^2 = \frac{1}{n-1} \sum^n_{i=1} (X_i-\bar X)^2 =\frac{1}{n-1} (\sum^n_{i=1} X_i^2 - n \bar X ^2)$﻿
standard deviation: $S = \sqrt{S^2}$﻿

> Why is $S^2$﻿ defined so?  
> **The expectation of the sample variance must be the same as the population variance.**
> **$$S^2 = \frac{1}{n-1} (\sum^n_{i=1} X_i^2 - n \bar X ^2)$$
>then
> $\begin{aligned}E((n-1)S^2) &= \sum^n_{i=1}E(X_i^2) - nE(\bar X^2)\\ &= \sum^n_{i=1}(DX_i+E^2X_i)-n(D\bar X+E^2\bar X)\\&=\sum^n_{i=1}(\sigma^2+\mu^2)-n(D(\frac{1}{n}\sum^n_{i=1}X_i)+E^2(\frac{1}{n}\sum^n_{i=1}X_i))\\&=\sum^n_{i=1}(\sigma^2+\mu^2)-n(\frac{\sigma^2}{n}+\mu^2)=(n-1)\sigma^2\end{aligned}$
> therefore  
> $$E(S^2) = \sigma^2$$

> From above, we have a conclusion in below:  
> $$E\bar X = EX =\mu$$

(3) $k$﻿-order origin moment of sample: $A_k=\frac{1}{n}\sum^n_{i=1} X_i^k$﻿
$\bar X = A_1$﻿
(4) $k$﻿-order central moment of sample: $B_k = \frac{1}{n}\sum^n_{i=1} (X_i-\bar X)^k$﻿
$S^2 = \frac{n}{n-1} B_2>B_2$﻿
#### Three major Sampling Distribution
##### $\chi^2$﻿ distribution
The sum of normal distribution squared

$\chi^2 \sim \chi^2(n)$﻿
$X_1,…,X_n$﻿ are independent and obey $N(0,1)$﻿, then $\chi^2 = X_1^2 +…+X_n^2$﻿ obey $\chi^2$﻿ distribution with degree of freedom $n$﻿.
specially, if $X\sim N(0,1)$﻿, then $X^2 \sim \chi^2(1)$﻿.

**Upper** $\alpha$﻿ **quantile of** $\chi^2$﻿ **distribution**
$\chi^2_\alpha(n)$﻿: $P\{ \chi^2>\chi^2_\alpha(n)\} = \alpha$﻿
$f(x)$﻿ of $\chi^2$﻿ distribution is unimodal and asymmetric.

**Properties:**
(1) $\chi^2_1\sim \chi^2(n_1), \chi^2_2\sim \chi^2(n_2)$﻿ are independent, then $\chi^2_1+\chi^2_2 \sim \chi^2(n_1+n_2)$﻿.
(2) $E\chi ^2(n) = n, D\chi^2(n) = 2n$﻿.

> Proof: $E\chi^2(n) =E(\sum^n_{i=1}X_i^2) = nEX_i^2 = n(DX_i+E^2X_i) = n;$﻿  
> $$\begin{aligned}D\chi^2(n) &= D(\sum^n_{i=1} X_i^2) = nD(X_i^2) \\&= n(E(X_i^4)-E^2(X_i^2))\\&=n(\int^{+\infty}_{-\infty}x^4f_X(x)dx-1)=2n.\end{aligned}$$﻿

> $X\sim N(0, 1)$﻿, then $E(X^2) = 0, D(X^2) = E(X^4)-E^2(X^2)=\int^{+\infty}_{-\infty}x^4f_X(x)dx-\int^{+\infty}_{-\infty}x^2f_X(x)dx$﻿,  
> $\chi^2 =X_1^2+…+X_n^2,$﻿ then from CLT, $\chi^2\overset{\cdot}\sim N(n, 2n).$﻿

**Probability Density distribution**

> [!important]  **e.g.1** $(X_1, X_2, …, X_n)$ **are samples from population** $X\sim N(\mu, \sigma^2)$**, solve: (1) the distribution of** $\frac{1}{\sigma^2} \sum^n_{i =1}(X_i-\mu)^2$**. (2) if** $n≥5,$ $a(X_1-X_2)^2 +b(2X_3-X_4-X_5)^2 \sim \chi^2(k)$**, what are the values of** $a,b,k$**?**
> (1) let $Y_i = \frac{X_i-\mu}{\sigma}$, then $Y_i\sim N(1,0)$ are independent. $\frac{1}{\sigma^2} \sum^n_{i =1}(X_i-\mu)^2=\sum^n_{i=1}Y_i^2 \equiv \chi^2\sim \chi^2(n).$ 
> (2) $X_1-X_2 \sim N(0, 2\sigma^2), 2X_3-X_4-X_5 \sim N(0, 6\sigma^2).$ $\frac{X_1-X_2}{\sqrt{a}} \sim N(0,1)$, …, then $a = \frac{1}{2\sigma^2}, b = \frac{1}{6\sigma^2}, k=2$.
##### $F$﻿ distribution
The ratio of two $\chi^2$﻿ distribution over their degree of freedom

$F\sim F(n_1, n_2)$﻿
$X\sim \chi^2(n_1),Y\sim \chi^2(n_2)$﻿ are independent, then $F = \frac{\frac{X}{n_1}}{\frac{Y}{n_2}}$﻿ obey $F$﻿ distribution with degrees of freedom $n_1, n_2$﻿.

**Upper** $\alpha$﻿ **quantile of** $F$﻿ **distribution**
$F_\alpha(n)$﻿: $P\{ F>F_\alpha(n)\} = \alpha$﻿
$f(x)$﻿ of $F$﻿ distribution is unimodal and asymmetric.

**Properties**
(1) $F\sim F(n_1, n_2)$﻿, then $\frac{1}{F}\sim F(n_2, n_1)$﻿.
(2) $F_{1-\alpha}(n_1, n_2) = \frac{1}{F_\alpha(n_2, n_1)}$﻿.
##### $t$﻿ distribution
The ratio of a normal distribution and the root of a $\chi^2$﻿ distribution over its degree of freedom

$T\sim t(n)$﻿
$X\sim N(0,1), Y\sim \chi^2(n),$﻿ then $T= \frac{X}{\sqrt{\frac{Y}{n}}}\sim t(n)$﻿.
**Upper** $\alpha$﻿ **quantile of** $t$﻿ **distribution**
$t_\alpha(n)$﻿: $P\{ T>t_\alpha(n)\} = \alpha$﻿
$f(x)$﻿ of $t$﻿ distribution is unimodal(at $x=0$﻿) and symmetric.

**Properties**
(1) $T\sim t(n),$﻿ then $T^2 \sim F(1, n)$﻿.
(2) $t_{1-\alpha}(n) = -t_{\alpha}(n)$﻿.
(3) $[t_{\frac{\alpha}{2}}(n) ]^2 =F_{\alpha}(1, n)$﻿.
(4) $EX = 0, DX=\frac{n}{n-2}(n>2)$﻿.

**Probability Density distribution**
$n=1, X\sim t(1)$﻿ are normal Cauchy distribution, $f(x) = \frac{1}{\pi (1+x^2)}, -\infty<x<+\infty$﻿
#### Six major Statistics
##### 1.Single normal population
$X_1, X_2, …, X_n$﻿ are simple random samples from $X\sim N(\mu, \sigma^2)$﻿, with sample mean $\bar X$﻿ and sample variance $S^2$﻿, then
(1) $\frac{\bar X -\mu}{\frac{\sigma}{\sqrt{n}}}\sim N(0,1)$﻿, which is $\bar X \sim N(\mu, \frac{\sigma^2}{n})$﻿.
(2) $\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum^n_{i=1}(X_i-\bar X)^2 \sim \chi^2(n-1)$﻿, and $\bar X, S^2$﻿ are independent.

> Proof: $\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum^n_{i=1}(X_i-\bar X)^2 = \sum^n_{i=1}(\frac{X_i-\bar X}{\sigma})^2 = \sum^n_{i=1}X_i^{*2}$﻿, because there is one constraint $\bar X$﻿, degree of freedom is subtracted by one.

(3) $\frac{\bar X-\mu}{\frac{S}{\sqrt{n}}}\sim t(n-1).$﻿

> Proof: $\frac{\bar X-\mu}{\frac{S}{\sqrt{n}}} =\frac{\frac{\bar X -\mu}{\frac{\sigma}{\sqrt{n}}}}{\sqrt{\frac{\frac{(n-1)S^2}{\sigma^2}}{n-1}}}\equiv \frac{N(0,1)}{\sqrt{\frac{\chi^2(n-1)}{n-1}}}\sim t(n-1)$﻿.
##### 2. Two normal population
$X_1, X_2, …, X_{n_1}$﻿ are simple random samples from $X\sim N(\mu_1, \sigma_1^2)$﻿, with sample mean $\bar X$﻿ and sample variance $S_1^2$﻿;
$Y_1, Y_2, …, Y_{n_2}$﻿ are simple random samples from $Y\sim N(\mu_2, \sigma_2^2)$﻿, with sample mean $\bar Y$﻿ and sample variance $S_2^2$﻿, then
(1) $\bar X -\bar Y \sim N(\mu_1-\mu_2, \frac{1}{n_1}\sigma_1^2+\frac{1}{n_2}\sigma_2^2)$﻿.
(2) $\frac{\frac{S_1^2}{\sigma_1^2}}{\frac{S_2^2}{\sigma_2^2}} \sim F(n_1-1, n_2-1)$﻿.
(3) if ==$\sigma_1^2 = \sigma_2^2$==﻿, then ==$\frac{\bar X-\bar Y -(\mu_1 -\mu_2)}{S_\omega\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}\sim t(n_1+n_2-2)$==﻿, where ==$S_\omega = \sqrt{\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}}$==﻿. ==**frequently tested**==

> Proof: $\frac{\bar X-\bar Y -(\mu_1 -\mu_2)}{\sigma\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}\equiv U \sim N(0,1)$﻿, $\frac{(n_1-1)S_1^2}{\sigma_1^2} \sim \chi^2(n_1-1)$﻿, $\frac{(n_2-1)S_2^2}{\sigma_2^2} \sim \chi^2(n_2-1)$﻿,  
> since they are independent, then  
> $\frac{(n_1-1)S_1^2}{\sigma_1^2} +\frac{(n_2-1)S_2^2}{\sigma_2^2} \equiv V\sim \chi^2(n_1+n_2-2)$﻿, therefore $\frac{U}{\sqrt{\frac{V}{n_1+n_2-2}}}\sim t(n_1+n_2-2)$﻿.

> [!important]  **e.g.2 $X_1, X_2, …, X_{n}$ are simple random samples from $X\sim N(\mu, \sigma^2)$, solve** $E(S^2), D(S^2), D(\bar XS^2)$.
> $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$, then $E(S^2) = \frac{\sigma^2}{n-1} E(\frac{(n-1)S^2}{\sigma^2})= (n-1)\frac{\sigma^2}{n-1} = \sigma^2.$ $D(S^2) = \frac{\sigma^4}{(n-1)^2} D(\frac{(n-1)S^2}{\sigma^2})= \frac{2\sigma^4}{n-1}$. $D(\bar X S^2)= E(\bar XS^2)^2 -E^2(\bar XS^2) \overset{\bar X, S^2\text{are independent}}= E(\bar X)^2E(S^4)-E^2(\bar X)E^2(S^2)$ $= (D\bar X+E^2\bar X)(DS^2+E^2S^2)-E^2\bar X \cdot E^2S^2= (\frac{\sigma^2}{n}+\mu^2)(\frac{2\sigma^4}{n-1} + \sigma^4)-\mu^2\sigma^4 = ...$