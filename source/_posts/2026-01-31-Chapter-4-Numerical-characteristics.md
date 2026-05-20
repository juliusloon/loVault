---
title: Chapter-4-Numerical-characteristics
tags:
  - PMS
date: 2026-01-31 00:00:04
---

#### Mathematical expectation
$$E(X) = \sum_{i}x_ip_i﻿ \text{ (discrete)} = \int^{+\infty}_{-\infty} xf(x)\text{d}x﻿\text{ (continuous)}$$$$→Y=g(X),﻿\text{ then } E(Y) = \sum_{i}g(x)p_i\text{ (discrete)}= \int^{+\infty}_{-\infty} g(x)f(x)\text{d}x﻿\text{ (continuous)}=\int ^\infty_{-\infty}f(x) \text{d}F(x) $$
> For $E(X)$﻿ to exist, $\sum_{i}x_ip_i$﻿ must be an **absolutely convergence series**, otherwise $E(X)$﻿ would change if we alter the order of addition. This means that it must be absolutely summable. 
> Consider the random variable $X$ that $$P(X=(-1)^{k+1}k)=\frac{c}{k^2},\ k=1,2,\dots,\ c=\frac{6}{\pi^2}$$
> **Sorting 1:** Set $x_{k}=(-1)^{k+1}k,\ p_{k}=\frac{c}{k^2}$, then$$EX=\sum^\infty_{k=1}x_{k}p_{k}=c\sum^\infty_{{k=1}}(-1)^{k+1}k\cdot \frac{1}{k^2}=c\ln2$$
> **Leibniz's Discriminant Method**
> If staggered series $\sum^\infty_{k=1}(-1)^{k+1}u_{k}$ obeys that
> (i) $u_{k}\geq0, {u_{k}}$ monotonically decreases;
> (ii) $\lim_{ k \to \infty }u_{k}=0.$
> Then the staggered series is convergent, and$$\sum^\infty_{k=1}(-1)^{k+1}u_{k}\leq u_{1}$$
> **Absolute convergence:** $\sum_{k=1}^{\infty}|u_{k}|<\infty$, any rearrangement stays absolutely convergent with the same sum. 
> **Conditional convergence:** convergent but not absolutely convergent, a rearrangement may be non-convergent or with a different sum.
> **Sorting 2:** Set $x_{1}=1,x_{2}=3,x_{3}=-2,x_{4}=-4,x_{5}=5,x_{6}=7,x_{7}=-6,x_{8}=-8,\dots$, and that $p_{1}=c,p_{2}=\frac{c}{3^2},p_{3}=\frac{c}{2^2},p_{4}=\frac{c}{4^2},p_{5}=\frac{c}{5^5},\dots$, then$$EX=\sum_{k=1}^{\infty} x_{k}p_{k}=c\left( 1+\frac{1}{3}-\frac{1}{2}-\frac{1}{4}+\frac{1}{5}+\frac{1}{7}-\frac{1}{6}-\frac{1}{8}+\dots \right)=\infty$$
> Therefore, X has no mathematical expectation.
> For continuous random variables, absolute cumulativity is required, which means $$\int^{\infty}_{-\infty}|x|p(x)\text{d}x<\infty $$

> [!quote] **n.e.1. Cauchy distribution**
> $$f(x) = \frac{1}{\pi (1+x^2)}, -\infty <x<+\infty$$
> where
> $$E(X)= \int^{+ \infty}_{-\infty}xf(x)dx = 0$$
> but
> $$\int^{+ \infty}_{-\infty}|x|f(x)dx = \frac{2}{\pi}\int^{+ \infty}_0 \frac{x}{1+x^2}dx=\frac{1}{\pi}\ln(1+x^2)|^\infty_0=\infty$$
> therefore it doesn’t exist. 

> [!quote] **n.e.2.**$$P(X=(-1)^{k+1}\frac{3^k}{k})=\frac{2}{3^k}, k=1,2,...$$
> $$\sum p = \frac{2}{3} \frac{1-(\frac{1}{3})^n}{1-\frac{1}{3}} =1$$
> therefore the definition is valid.  
> $$E(X) = \sum_{k=1} (-1)^{k+1}\frac{3^k}{k} \frac{2}{3^k}=2\sum_{k=1}\frac{(-1)^{k+1}}{k}=2\ln 2$$
> but it’s obviously not absolutely convergent.
##### Properties
(i) $a\leq X\leq b \implies a\leq EX\leq b$
(ii) $E(a+bX)=a+bE(X)$
(iii) $E(X+Y)=EX+EY$
> [!quote] Derivation of property (iii)
> $(X,Y)\sim p(x,y)$, then $Z=:X+Y$ has a density that $$p_{Z}(z)=\int^\infty_{\infty}p(x,z-x)\text{d}x$$therefore $$E(X+Y)=\int^\infty_{-\infty}zp_{Z}(z)\text{d}z=\int^\infty_{-\infty}z\int^\infty_{-\infty}p(x,z-x)\text{d}x\text{d}z=$$$$\int^\infty_{-\infty}\int^\infty_{-\infty}(x+y)p(x,y)\text{x}\text{y}=\int^\infty_{-\infty}\int^\infty_{-\infty}xp(x,y)\text{d}x\text{d}y+\int^\infty_{-\infty}\int^\infty_{-\infty}yp(x,y)\text{d}x\text{d}y$$$$=\int^\infty_{-\infty}xp_{X}(x)\text{d}x+\int^\infty_{-\infty}xp_{Y}(y)\text{d}y=EX+EY$$

$$
\implies E(a_{1}X_{1}+a_{2}X_{2}+\cdots+a_{m}X_{m})=a_{1}EX_{1}+a_{2}EX_{2}+\cdots+a_{m}EX_{m}
$$

> [!quote] e.g. $X_{1},X_{2},\cdots,X_{m}$ are non-negative, independent and identically distributed random variables, solve $$E \frac{{X_{1}+\cdots+X_{k}}}{X_{1}+\cdots+X_{m}}$$
> $$E \frac{X_{1}}{X_{1}+\cdots+X_{m}}=E \frac{X_{2}}{X_{1}+\cdots+X_{m}}=\cdots=E \frac{X_{m}}{X_{1}+\cdots+X_{m}}$$ exist and are limited. Besides, $$1=E \frac{X_{1}+\cdots+X_{m}}{X_{1}+\cdots+X_{m}}=E \frac{X_{1}}{X_{1}+\cdots+X_{m}}+\cdots+E \frac{X_{m}}{X_{1}+\cdots+X_{m}}=m\cdot E \frac{X_{1}}{X_{1}+\cdots+X_{m}}$$Therefore, $$E \frac{X_{1}}{X_{1}+\cdots+X_{m}}=\frac{1}{m}, E \frac{X_{1}+\cdots+X_{k}}{X_{1}+\cdots+X_{m}}= \frac{k}{m}.$$

$(X,Y)$﻿ is a **bivariate random variable** with density function $f(x,y)$﻿
$Z = g(X,Y),$﻿ then $E(Z) = \sum_{i}\sum_{j}g(x_i, y_j)p_{ij}$﻿ (discrete) $= \int^{+\infty}_{-\infty}\int^{+\infty}_{-\infty}g(x, y)f(x,y)dxdy$﻿ (continuous)
$$E(X) = \int^{+\infty}_{-\infty}\int^{+\infty}_{-\infty}xf(x,y)dxdy,E(Y) = \int^{+\infty}_{-\infty}\int^{+\infty}_{-\infty}yf(x,y)dxdy$$﻿
$X<Y$﻿ are independent $\Longrightarrow$﻿ $X, Y$﻿ are irrelevant $\iff E(XY)=E(X)E(Y)$﻿
#### Variance
$$D(X) = Var(X) = E(X-EX)^2 = EX^2 -E^2X$$
If $X,Y$﻿ are independent, 
$$D(XY) = E(XY)^2 - E^2(XY) = EX^2\cdot EY^2 - E^2X\cdot E^2Y$$

|                 Distribution                 |        $EX$         |                               $DX$                               |
| :------------------------------------------: | :-----------------: | :--------------------------------------------------------------: |
|               0-1 distribution               |         $p$         |                             $p(1-p)$                             |
|      Binary distribution $X\sim B(n,p)$      |        $np$         |                            $np(1-p)$                             |
|   Poisson distribution $X\sim P(\lambda)$    |      $\lambda$      |                            $\lambda$                             |
|     Geometric distribution $X\sim G(p)$      |    $\frac{1}{p}$    |                       $\frac{{1-p}}{p^2}$                        |
| Hypergeometric distribution $X\sim H(n,M,N)$ |   $n \frac{M}{N}$   | $n\cdot \frac{M}{N}\cdot \frac{{N-M}}{N}\cdot \frac{{N-n}}{N-1}$ |
|     Uniform distribution $X\sim U(a,b)$      |  $\frac{{b-a}}{2}$  |                      $\frac{{(b-a)^2}}{12}$                      |
| Normal distribution $X\sim N(\mu,\sigma^2)$  |        $\mu$        |                            $\sigma^2$                            |
| Exponential distribution $X\sim E(\lambda)$  | $\frac{1}{\lambda}$ |                      $\frac{1}{\lambda^2}$                       |
|                                              |                     |                                                                  |
##### Properties
(i) $Var(a+bX)=b^2Var(X)$
(ii) $Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)=Var(X)+Var(Y)+2(E(XY)-EX\cdot EY)$
specially, if X, Y are independent, $$Var(X+Y)=VarX+VarY$$$$\implies X_{1},\dots,X_{m} \text{ are independent, } Var\left( \sum_{k=1}^{m} X_{k} \right)=\sum_{k=1}^{m} Var(X_{k})$$
 (iii) if $c≠EX$, then $Var(X)<E(X-c)^2$
 
> [!quote] Proof
> $$Var(X)=E(X-EX)^2=E(X-c-(EX-c))^2=E(X-c)^2+(EX-c)^2-2E(X-c)(EX-c)$$$$E(X-c)^2-(EX-c)^2<E(X-c)^2, c\neq EX$$

(iv) if $Var(X)=0,$ then $P(X=EX)=1$.

> [!quote] Proof
> We may assume $EX=0,$ which turns this question into proving that $P(X=0)=1.$
> To prove this, we show that $P(|X|>0)=0$.
> From Chebyshev Inequality, $\forall \varepsilon>0,$ $$P(|X|>\varepsilon)\leq \frac{Var(X)}{\varepsilon^2}=0$$therefore, $$P(|X|>0)=P\left( \bigcup^\infty_{n=1}{|X|> \frac{1}{n}} \right)\leq \sum_{n=1}^{\infty} P\left( |X|> \frac{1}{n} \right)=0$$
#### Covariance
$$Cov(X,Y) = E[(X-EX)(Y-EY)] = EXY-EX\cdot EY$$
> If $X,Y$﻿ are independent, $E(XY)=E(X)E(Y)$﻿, which is $E[(X-EX)(Y-EY)]= 0$﻿. therefore $Cov(X,Y)$﻿ is defined.
##### Properties
(1)$$Cov(X,Y) = Cov(Y,X), Cov(X, X)=D(X)$$﻿
(2)$$Cov(aX+bY+c,Z) = aCov(X, Z)+bCov(Y,Z)$$

> [!important]  **e.g.1 Simplify** $Cov(X+Y,X-Y)$.

(3) **Cauchy-Schwarz Inequality**
$$Cov^2(X,Y) \le VarX\cdot VarY, \text{ “=” holds iff. }Y= c_1 +c_2X$$

> [!quote] Proof
> We may assume that $EX= EY=0$, turning this question into proving $$E|XY|\leq \sqrt{ EX^2EY^2 }$$
> Notice that $\forall t \in \mathbb{R},$ $$0\leq E(|X|+t|Y|)^2=EX^2+2tE|X||Y|+t^2EY^2$$
> t=1, then $$[-2E(|X|\cdot|Y|)]^2\leq(EX^2+EY^2)^2$$ $$\implies 4E^2(|X|\cdot|Y|)\leq 4EX^2EY^2\leq2EX^2EY^2+E^2X^2+E^2Y^2$$

$Cov(X,Y)$﻿ **with** $EX, DX$﻿
$$E(XY)=E(X)E(Y)+Cov(X,Y)$$
$$D(X\pm Y) = D(X)+D(Y) \pm 2Cov(X,Y)$$

##### Covariance Matrix
If the variance of $X,Y$ exist, then call $$\Sigma=\begin{pmatrix} VarX &Cov(X,Y)\\Cov(X,Y) & VarY \end{pmatrix}$$the covariance matrix.
**Properties**
(i) The covariance matrix is always **non-negative definite** $$(x,y)\begin{pmatrix}
VarX & Cov(X,Y)\\Cov(X,Y)  & VarY \end{pmatrix}\begin{pmatrix}x \\y\end{pmatrix}\geq0$$
In fact, expand the expression will give $$x^2VarX+2xyCov(X,Y)+y^2VarY\geq0.$$
(ii) $X,Y$ are **uncorrelated** $\Leftrightarrow Cov(X,Y)=0.$
Uncorrelated $\Leftrightarrow$ no linear correlation $\nRightarrow$ independence
Independence $\Leftrightarrow$ no any relation $\implies$ uncorrelated

> [!quote] e.g. $\theta \sim U(0,2\pi),X=\sin \theta,Y=\cos \theta$ 
> $$EX=0,\ EY=0,\ VarX= \frac{1}{2}, VarY= \frac{1}{2},\ Cov(X,Y)=0\implies \gamma=0$$
> However, clearly that $$X^2+Y^2\equiv1$$
#### Mean Vector
If the mathematical expectation of $X, Y$ exist, then call $$\vec{\mu}=(EX,EY)$$the mean vector.
#### Correlation coefficient $\rho(\gamma)$
$$\rho_{XY} = \frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}} = Cov(X^*,Y^*)=Cov(\frac{X-EX}{\sqrt{Var(X)}},\frac{Y-EY}{\sqrt{Var(Y)}})$$﻿
Notes:
(1) $$|\rho_{XY}|\le 1$$
(2) $$\rho_{XY} =0 \iff Cov(X,Y) =0 \iff E(XY) =E(X)E(Y) \iff D(X \pm Y) = DX+DY$$﻿
(3) $$\rho_{XY}=\pm1 \iff (Y-EY)=\pm t_{0}(X-EX)$$where $$t_{0}=\sqrt{ \frac{VarX}{VarY} }$$﻿
> [!quote] Proof of property (3)
> if $\gamma=1$, then $$Cov(X,Y)=\sqrt{ VarX\cdot VarY}$$
> $$E[(X-EX)-t_{0}(Y-EY)]^2=0 \iff VarX^2-2t_{0}Cov(X,Y)+t_{0}^2VarY^2=0\iff t_{0}=\sqrt{ \frac{VarX}{VarY}. }$$

> [!quote]   **e.g.2 $X,Y$ are independent and identically distributed and variance exists, let $U =X-Y, V=X+Y,$ analyse the correlevance and independence of $U,V$.**
> $Cov(U,V) = Cov(X+Y,X-Y) = D(X)-D(Y) =0,$ thus $\rho_{XY}=0$ 
> however, $X,Y$ are not necessarily independent. 
> (1) $X, Y \sim N(\mu, \sigma^2),$ then $U,V$ are normal distribution, 
> then $(U, V) \sim N(\mu_1, \sigma_1^2)$, correlevance $\iff$independence 
> (2) $X,Y \sim B(1, \frac{1}{2})$, then $P(U=1, V=0) = P(X-Y=1, X+Y=0) =0$; 
> $P(U=1) = P(X-Y=1)= P(X=1, Y=0) = \frac{1}{4},$ 
> $P(V=0) = P(X+Y=0)=P(X=0, Y=0) =\frac{1}{4}$. 
> therefore $P(U=1, V=0) \ne P(U=1)P(V=0), U, V$ are not independent.

#### Conditional Expectation
**Recap: Conditional distribution**
##### (1) Discrete random variables
$$
P(X=x_{i},Y=y_{j})=p_{ij}, i,j=1,2,\dots
$$
then the marginal distribution is $$X\sim p_{i,\cdot},\ Y\sim P_{\cdot, j}$$
Given $Y=y_{j},$ the conditional distribution of $X$ is
$$
P(X=x_{i}|Y=y_{j})=\frac{p_{ij}}{p_{\cdot,j}},\ i=1,2,3,\dots
$$
then the conditional expectation of $X$ is
$$
E(X|Y=y_{j})=\sum^\infty_{i=1}x_{i}P(X=x_{i}|Y=y_{j})
$$
apparently absolute convergence of the series is required.
Similarly, given $X=x_i$, the conditional expectation of $Y$ is
$$
E(Y|X=x_{i})=\sum^\infty_{j=1}y_{j}P(Y=y_{j}|X=x_{i})
$$
> [!quote] $\xi_{1},\xi_{2},\dots,\xi_{n}$ are i.i.d. with $$P(\xi_{k}=1)=p, P(\xi_{k}=0)=1-p,$$set $S_{n}=\sum^n_{k=1}\xi_{k}$, solve $E(\xi_{k}|S_{n}=m), 0\leq m\leq n.$
> $$E(\xi_{k}|S_{n}=m)=0\times P(\xi_{k}=0|S_{n}=m)+1\times P(\xi_{k}=1|S_{n}=m)=P(\xi_{k}=1|S_{n}=m)$$$$=\frac{P(\xi_{k=1},S_{n}=m)}{P(S_{n}=m)}=\frac{P(\xi_{k}=1)P(S_{n-1}=m-1)}{P(S_{n}=m)}=\frac{{p\cdot C^{m-1}_{n-1}p^{m-1}(1-p)^{n-m}}}{C^m_{n}p^m(1-p)^{n-m}}=\frac{m}{n}$$
##### (2) Continuous random variables
$(X,Y)\sim p(x,y)$, then$$X\sim p_{X}(x)=\int^{\infty}_{-\infty}p(x,y)\text{d}y,\ \ Y\sim p_{Y}(y)=\int^{\infty}_{-\infty}p(x,y)\text{d}x$$
Given $Y=y$, the conditional distribution of $X$ is $$P(X=x|Y=y)= \frac{p(x,y)}{p_{Y}(y)}$$
then the conditional expectation of $X$ is $$E(X|Y=y)=\int^{\infty}_{-\infty}xP(X=x|Y=y)\text{d}x$$apparently absolute cumulativity of the integral is required.
Similarly, given $X=x$, the conditional expectation of $Y$ is $$E(Y|X=x)=\int^{\infty}_{-\infty}yP(Y=y|X=x)\text{d}y$$

> [!quote] e.g. $(X,Y)\sim N(\mu_{1},\sigma_{1}^2;\mu_{2},\sigma^2_{2};\rho)$
> then $X\sim N(\mu_{1},\sigma_{1}^2),\ Y\sim N(\mu_{2},\sigma_{2}^2)$. Given $Y=y$, $$X\sim N\left( \mu_{1}+ \frac{\rho\sigma_{1}}{\sigma_{2}}(y-\mu_{2}),(1-\rho^2)\sigma_{1}^2 \right)$$therefore, $$E(X|Y=y)=\mu_{1}+ \frac{\rho\sigma_{1}}{\sigma_{2}}(y-\mu_{2})$$
> Similarly, given $X=x$, $$Y\sim N\left( \mu_{2}+ \frac{\rho\sigma_{2}}{\sigma_{1}}(x-\mu_{1}),(1-\rho^2)\sigma^2 \right)$$therefore,$$E(Y|X=x)=\mu_{2}+ \frac{\rho\sigma_{2}}{\sigma_{1}}(x-\mu_{1})$$

#### Law of Total Expectations
Each $y_j$ corresponds to one conditional expectation $E(X|Y=y_j)$, therefore, define a function$$g(y_{j})=E(X|Y=y_{j})\implies g(Y)=E(X|Y)$$of $Y$, therefore it is a random variable. Solve its expectation:$$
Eg(Y)=\sum_{j=1}^{\infty}g(Y)P(Y=y_{j})=\sum_{j=1}^{\infty} \sum_{i=1}^{\infty} x_{i}P(X=x_{i}|Y=y_{j})P(Y=y_{j})=\sum_{i=1}^{\infty} x_{i}\left[ \sum_{j=1}^{\infty} P(X=x_{i}|Y=y_{j})P(Y=y_{j}) \right]$$$$=\sum_{i=1}^{\infty} x_{i}P(X=x_{i})=EX$$
Therefore, we have the law of total expectations:$$E(E(X|Y))=EX, \ \ E(E(Y|X))=EY.$$
**Notes:** here $E(X|Y)$ is the expectation of $X$ when $Y$ has different values, therefore a function of $Y$, $X$ is smashed. Solving the function gets $Y$ smashed, too, giving a pure value which is $EX$.

> [!quote] Continuation of last e.g. $(X,Y)\sim N(\mu_{1},\sigma_{1}^2;\mu_{2},\sigma^2_{2};\rho)$
> Having acquired that $$E(X|Y=y)=\mu_{1}+ \frac{\rho\sigma_{1}}{\sigma_{2}}(Y-\mu_{2})$$then $$g(Y)=\mu_{1}+ \frac{\rho\sigma_{1}}{\sigma_{2}}(Y-\mu_{2})$$therefore$$Eg(Y)=E\left[\mu_{1}+ \frac{\rho\sigma_{1}}{\sigma_{2}}(Y-\mu_{2})\right]=\mu_{1}+\frac{\rho\sigma_{1}}{\sigma_{2}}(EY-\mu_{2})=\mu_{1}=EX$$


> [!quote] Suppose the number of children in a family is a random variable $X$ with mean $\mu$, and given $X=n$ for $n\geq1$, each of the $n$ children in the family is a girl with probability $p$ and a boy with probability $1-p$. What is the expected number of girls in a family? 
> Set $G$ the number of girls in a family, then $$E(G|X=n)=np$$$$EG=\sum_{n=1}^{\infty} E(G|X=n)P(X=n)=\sum_{n=1}^{\infty} npP(X=n)=\mu p. $$
#### Moment
##### k-order origin moment
$$\mu_k = E(X^k)$$
$$E(X)=\mu_1$$
##### k-order central moment
$$\nu _k = E[(X-E(X))^k]$$
$$D(X) = \nu_2$$


> [!quote] e.g. $X\sim N(0,\sigma^2)$, then $E|X|^k<\infty$ and $EX^{2k}=(2k-1)!!\sigma^{2k},EX^{2k+1}=0, k\geq{1}$
> $$EX^{2k}=\int^{\infty}_{-\infty}x^{2k} \frac{1}{\sqrt{ 2\pi }}e^{- x^2/2}\text{d}x=-\int^{\infty}_{-\infty}x^{2k-1} \frac{1}{\sqrt{ 2\pi }}\text{d}e^{- x^2/2}=(2k-1)EX^{2k-2}\implies EX^{2k}=(2k-1)!!$$

> [!quote] e.g $X\sim P(\lambda),$ then $E|X|^k<\infty$ and $EX(X-1)\cdots(X-(k-1))=\lambda^k,\ k\geq1$
> This property has an important role in calculating the $k$-order origin moment of Poisson distribution:
> $$EX^2=EX(X-1)+EX$$$$EX^3=EX(X-1)(X-2)+3EX(X-1)+EX$$$$EX^4=EX(X-1)(X-2)(X-3)+6EX(X-1)(X-2)+7EX(X-1)+EX$$$$\cdots$$

#### Discussion: Is the distribution of a random variable uniquely determined by its moment?
For $X,Y$ are random variables with$$EX^k=EY^k, \ k\geq1$$do we have$$X \overset{d}=Y?$$
**Generally, NO.** 
For **normal distribution, Poisson distribution and Wigner semicircle distribution**, they are uniquely determined by the moment.

> [!quote] Wigner semicircle distribution $$f(x)= \frac{2}{\pi R^2}\sqrt{ R^2-x^2 }, -R\leq x\leq R; f(x)=0, \text{otherwise}$$
> $$EX^{2k+1}=0, \ \ EX^{2k}= \frac{1}{2^k}\cdot \frac{1}{k+1} \begin{pmatrix} 2k \\ k\end{pmatrix}=\frac{1}{2^k}m_{k}$$$m_k$ is called the Catalan number.


> [!quote] n.e. $\xi \sim N(0,1),X=e^\xi,$ then $X\sim p_{X}(x):$$$p_{X}(x)= \frac{1}{\sqrt{ 2\pi }x}e^{-\frac{1}{2}(\log x)^2},\ x>0;\  p_{X}(x)=0,\ x\leq0$$Define $Y\sim p_{Y}(y):$$$p_{Y}(y)=p_{X}(y)(1+\sin(2\pi \log y)),\ y>0$$
> (i) $y$ is a valid probability density function
> (ii) $EX^k=EY^k, \ k\geq0$
##### Judgement Formula
For random variables $X,Y$ with $$
EX^k=EY^k=m_{k}<\infty,\ \forall k\geq1
$$if any one of the conditions holds
(i)$$
\exists t>0,\ \sum_{k=1}^{\infty} \frac{m_{2k}t^{2k}}{(2k)!}<\infty
$$
(ii)$$
\sum_{k=1}^{\infty} m_{2k}^{- \frac{1}{2k}}=\infty
$$
(iii)$$
\lim_{ k \to \infty }|m_k|^{\frac{1}{k}}<\infty
$$then $$X \overset{d}=Y$$
##### (k+l)-order mixed origin moment
$$E(X^kY^l)$$
##### (k+l)-order mixed central moment
$$E[(X-EX)^k(Y-EY)^l]$$﻿
$Cov(X,Y) =(1+1)$﻿-order mixed central moment

##### Upper $\alpha$﻿ quantile
$$1-F(x_{\alpha}) = \int^{+\infty}_{x_\alpha} f(x)dx =\alpha$$
the area of the RIGHT part of the density function divided by $x=\alpha$
#### Eigenfunction
$(\Omega,\mathcal{A},P),X:\Omega \mapsto \mathbb{R},X\sim F_{X}(x)$. Define $$
\varphi(t)=Ee^{ itX }=E\cos tX+iE\sin tX,\ t \in \mathbb{R}
$$
**real-variable complex-valued function $\varphi(t):\mathbb{R}\to \mathbb{C}$** 
Using complex analysis to study distributional properties of random variables
If $X\sim F(x),$ then $$
\varphi(t)=\int^{\infty}_{-\infty}e^{ itx }\text{d}F(x)
$$

| Distribution                                | Eigenfunction                                       |
| ------------------------------------------- | --------------------------------------------------- |
| Degradation Distribution ${P(X=c)=1}$       | $$\varphi(t)=e^{ ict }$$                            |
| 0-1 Distribution                            | $$\varphi(t)=pe^{ it }+1-p$$                        |
| n-Bernoulli Distribution $X\sim B(n,p)$     | $$\varphi(t)=(1-p+pe^{ it })^n$$                    |
| Poisson Distribution $X\sim P(\lambda)$     | $$\varphi(t)=e^{\lambda(e^{ it }-1)}$$              |
| Uniform Distribution $X\sim U(a,b)$         | $$\varphi(t)= \frac{e^{ itb }-e^{ ita }}{it(b-a)}$$ |
| Exponential Distribution $X\sim E(\lambda)$ | $$\varphi(t)= \frac{\lambda}{\lambda-it}$$          |
| Normal Distribution $X\sim N(\mu,\sigma^2)$ | $$\varphi(t)=e^{ it\mu- \frac{1}{2}\sigma^2t^2 }$$  |
##### Properties
(i) $\varphi(0)=1$
(ii) $|\varphi(t)|\leq1=\varphi(0)$
(iii) $\varphi(-t)=\overline{\varphi(t)}$
(iv) $\varphi(t)$ is uniform continuous in $\mathbb{R}$.

> [!quote] Proof of Property (iv)
> We prove this by showing that $\forall \varepsilon>0,\ \exists\delta>0,\ s.t.\forall|h|<\delta,\ \forall t\in \mathbb{R},$$$|\varphi(t+h)-\varphi(t)|<\varepsilon$$
> $$
|\varphi(t+h)-\varphi(t)|=|Ee^{ i(t+h)X }-Ee^{ itX }|=|Ee^{ itX }(e^{ ihX }-1)|\leq E|e^{ itX }|\cdot E|(e^{ ihX }-1)|\leq E|(e^{itX }-1)|$$
> Fix $\varepsilon>0$, if $X\sim F(x)$, then $\exists M>0,$$$
P(|X|>M)=1-F(M)+F(-M)\leq \frac{\varepsilon}{4}
$$Geometry easily gives that $$|e^{ihx}-1|\leq |hx|<2$$
> Therefore, $$|\varphi(t+h)-\varphi(t)|\leq E|(e^{ ihX }-1)|=\int^{\infty}_{-\infty}|e^{ ihx}-1|\text{d}F(x)=\int_{|x|>M}|e^{ ihx }-1|\text{d}F(x)+\int_{|x|<M}|e^{ ihx }-1|\text{d}F(x)$$$$\int_{|x|>M}2\,\text{d}F(x)+\int_{|x|\leq M}|e^{ ihx }-1|\text{d}F(x)\leq 2\cdot \frac{\varepsilon}{4}+hM$$
> Choose a $\delta$ small enough that $\delta M< \frac{\varepsilon}{2}$, therefore, $|h|\leq\delta$,$$
|\varphi(t+h)-\varphi(t)|<2\cdot \frac{\varepsilon}{4}+hM<\varepsilon$$

(v) **Bochner non-negative definiteness**
$\forall t_{1},t_{2},\dots,t_{n}\in \mathbb{R}, \forall a_{1},a_{2},\dots,a_{n}\in \mathbb{R},$$$
\sum_{k,l=1}^{n} a_{k}\bar{a}_{l}\varphi(t_{k}-t_{l})\geq 0
$$

> [!quote] Proof of property (v)
> $$\sum_{k,l=1}^{n} a_{k}\bar{a}_{l}\varphi(t_{k}-t_{l})=\sum_{k,l=1}^{n} a_{k}\bar{a}_{l}Ee^{ i(t_{k}-t_{l})X }=E\sum_{k,l=1}^{n} a_{k}\bar{a}_{l}e^{ it_{k}X }\overline{e^{ it_{l}X }}=E|\sum_{k=1}^{n} a_{k}e^{ it_{k}X }|^2\geq 0$$

(vi) differentiability
$$
\varphi'(t)=\left(\int^{\infty}_{-\infty}e^{ itx }\text{d}F(x)\right)'=\int^{\infty}_{-\infty}ixe^{ itx }\text{d}F(x)=i\int^{\infty}_{-\infty}xe^{ itx }\text{d}F(x)
$$specially,$$
\varphi'(0)=i\mu.
$$
Similarly, if k-order origin moment exists, then $$
\varphi^{(k)}(t)=i^k\int^{\infty}_{-\infty}x^ke^{ itx }\text{d}F(x)
$$and $\varphi(t)$ can do k-time expansion at $t=0$ as $$
\varphi(t)=\varphi(0)+\varphi'(0)t+ \frac{\varphi''(0)}{2!}t^2+\cdots+\frac{\varphi^{(k)}(0)}{k!}t^k+o(t^k)=1+\sum_{n=0}^{k}i^n \frac{EX^n}{n!}t^n+o(t^k),\ t\to 0.$$
##### Algorithm Properties
(i) Addition Formula$$
\varphi_{aX+c}(t)=e^{ itc }\varphi_{X}(at)=Ee^{ it\cdot aX +it\cdot c}
$$
Application: Given that $$X\sim N(0,1),\ \ \varphi_{X}(t)=e^{ - \frac{1}{2}t^2 }
$$If $Y\sim N(\mu,\sigma^2)$, then $Y=\mu+\sigma x,$ therefore $$
\varphi_{Y}(t)=e^{ it\mu }\varphi_{X}(\sigma t)=e^{ it\mu }e^{ -\frac{1}{2}(\sigma t)^2 }=e^{ it\mu-\frac 12\sigma^2t^2 }
$$
(ii) Multiplication Formula 
If $X,Y$ are independent, then the eigenfunction of $Z:=X+Y$ is$$\varphi_{Z}(t)=\varphi_{X}(t)\varphi_{Y}(t)$$
If $X_{1},X_{2},\cdots,X_{n}$ are independent, $Z:=X_{1}+X_{2}+\cdots+X_{n}$, then $$
\varphi_{Z}(t)=\prod_{k=1}^{n}\varphi_{X_{k}}(t) 
$$
Application：n-Bernoulli distribution $S_{n}\sim B(n,p), S_{n}=\sum_{k=1}^{n}\xi_{k}$, therefore $$
\varphi_{S_{n}}(t)=Ee^{ itS_{n} }=\prod^n_{k=1}Ee^{ it\xi_{k} }=(1-p+pe^{ it })^n
$$
##### Uniqueness Theorem
Distribution function and eigenfunction uniquely determine each other. That is to say, $$
\varphi_{X}(t)\equiv \varphi _{Y}(t) \iff X \overset{d}= Y, F_{X}(x)\equiv F_{Y}(y)
$$
In fact, we have the **Reversal Formula**$$
F_{X}(x_{2})-F_{X}(x_{1})=\lim_{ T \to \infty } \frac{1}{2\pi} \int^T_{-T} \frac{{e^{ -itx_{2} }-e^{ -itx_{1} }}}{it}\cdot\varphi_{X}(t)\text{d}t
$$
$\implies$ If the eigenfunction $\varphi(t)$ of $X$ is absolute cumulative, then the density function of $X$ is $$
p(x)=\frac{1}{2\pi}\int^{\infty}_{-\infty}e^{ -itx }\varphi(t)\text{d}t
$$

> [!quote] e.g.1. $\varphi(t)$ is an eigenfunction, solve the distribution of corresponding random variable.
> $$p(x)=\frac{1}{2\pi}\int^{\infty}_{-\infty}e^{ -itx }e^{ -|t| }\text{d}t=\frac{1}{2\pi} \left[ \int^{0}_{-\infty}e^{ -itx }e^{ t }\text{d}t+\int^{\infty}_{0}e^{ -itx }e^{ -t }\text{d}t \right]$$ 
> $$\implies X\sim p(x)=\frac{1}{\pi}\cdot \frac{1}{1+x^2} \text{     Chauchy r.v.}$$

This can be used to calculate the distribution of a random variable.

> [!quote] e.g. $X_{k}\sim N(\mu_{k},\sigma_{k}^2),\ k=1,2,\cdots,n,\ Z=\sum_{k=1}^{n}X_{k}$
> (a) Solve the eigenfunction $\varphi_{Z}(t)$ first. $$\varphi_{Z}(t)=Ee^{ itZ }=\prod_{k=1}^{n} Ee^{ itX_{k} }=\prod_{k=1}^{n} e^{ it\mu_{k}- \frac{1}2 \sigma_{k}^2t^2 }=e^{ it\sum_{k=1}^{n} \mu_{k}- \frac{1}{2} \sum_{k=1}^{n}\sigma_{k}^2t^2}$$
> (b) Compare the acquired eigenfunction with known eigenfunctions to determine the distribution.$$Z\sim N(\mu,\sigma^2)$$where $$\mu=\sum_{k=1}^{n}\mu_{k},\sigma^2=\sum_{k=1}^{n} \sigma_{k}^2. $$
##### Judgement Formula
if the eigenfunction $\varphi(t)$ can be written in a form as $$
\varphi(t)=\sum_{k=-\infty}^{\infty} a_{k}e^{ ikt }, a_{k}\geq 0, \sum_{k=-\infty}^{\infty}a_{k}=1. 
$$
Then $$
P(X=k)=a_{k}, \ k=\cdots,-2,-1,0,1,2,\cdots
$$

> [!quote] e.g. $\varphi(t)=\cos t$
> $$\varphi(t)=\cos t=\frac{1}{2}e^{ -it }+ \frac{1}{2}e^{ it }$$
> Therefore, $X\sim P(X=-1)= \frac{1}{2},P(X=1)=\frac{1}{2}$.
###### The eigenfunction of binary random vector
For binary random vector $(X,Y)$, its eigenfunction is a binary function $$
\phi(t_{1},t_{2})=Ee^{ i(t_{1}X+t_{2}Y) },\ t_{1},t_{2} \in \mathbb{R}
$$specially, if $X,Y$ are independent, $$
\phi(t_{1},t_{2})=Ee^{ it_{1}X+it_{2}Y }=Ee^{ it_{1}X }Ee^{ it_{2}Y }=\phi_{X}(t_{1})\phi_{Y}(t_{2})
$$This is in fact a necessary and sufficient condition.

> [!quote] e.g. Binary joint normal random variables $(X,Y)\sim N(\mu_{1},\sigma_{1}^2;\mu_{2},\sigma^2_{2};\rho)$, solve $\phi(t_{1},t_{2}).$
> For simplicity, we assume $\mu_{1}=0,\sigma^2_{1}=1;\mu_{2}=0,\sigma_{2}^2=1,$ then $(X,Y)\sim N(0,1;0,1;\rho)$
> Set $$\Sigma=\begin{pmatrix}1 & \rho\\ \rho & 1\end{pmatrix}$$Perform a linear transformation $$\begin{pmatrix}U\\V\end{pmatrix}=\Sigma^{-1/2}\begin{pmatrix}X \\ Y \end{pmatrix}=\begin{pmatrix}1 & \rho\\ \rho & 1\end{pmatrix}^{-1/2}\begin{pmatrix}X \\ Y \end{pmatrix}$$therefore, $(U,V)\sim N(0,1;0,1;0)$, i.e. $U,V$ are independent, $$\phi_{U,V}(t_{1},t_{2})=e^{ -\frac 12 (t_{1}^2+t_{2}^2) }=e^{ -\frac 12 (t_{1},t_{2})(t_{1},t_{2})^T }$$
> Therefore, $$\phi_{X,Y}(t_{1},t_{2})=Ee^{ i(t_{1},t_{2})(X,Y)^T}=Ee^{ i(t_{1},t_{2})\Sigma^{1/2}(U,V)^T}$$
Set $$
(s_{1},s_{2})=(t_{1},t_{2})\Sigma^{1/2}, \ (s_{1},s_{2})^T=\Sigma^{1/2}\begin{pmatrix}t_{1}\\t_{2}\end{pmatrix}$$then$$\phi_{X,Y}(t_{1},t_{2})=Ee^{ i(s_{1},s_{2})(U,V)^T }=Ee^{ is_{1}U+is_{2}V }=Ee^{ is_{1}U }Ee^{ is_{2}V }=e^{ -\frac 12(s_{1}^2+s_{2}^2)}$$$$=e^{ -\frac 12 (s_{1},s_{2})(s_{1},s_{2})^T }=e^{ -\frac 12 (t_{1},t_{2})\Sigma^{1/2}\Sigma^{1/2}(t_{1},t_{2})^T}=e^{ - \frac 12 (t_{1},t_{2})\Sigma (t_{1},t_{2})^T }$$


> [!quote] $\mathbf{\xi}=(\xi_{1},\xi_{2},\xi_{3})'\sim N(\mathbf{a},\mathbf{B}),$ where $\mathbf{a}=(a_{1},a_{2},a_{3})',\mathbf{B}=(b_{ij})_{3\times3}.$ Perform transformation $$\left\{\begin{array} l \eta_{1} = \frac{x_{i}}{2}-\xi_{2}+\frac{\xi_{3}}{2} \\ \eta_{2}= - \frac{\xi_{1}}{2}-\frac{\xi_{3}}{2} \end{array}\right.$$Solve for the distribution of $\mathbf{\eta}=(\eta_{1},\eta_{2})^T$.
> 解决该问题的目标是找到新的变量$\mathbf{\eta}=(\eta_1, \eta_2)'$的分布，这需要将原始的正态分布$\mathbf{\xi} \sim N(\mathbf{a}, \mathbf{B})$通过线性变换转换到$\mathbf{\eta}$。以下是详细步骤：
> **1. 定义线性变换：**
> $$\begin{aligned}
> \eta_1 &= \frac{\xi_1}{2} - \xi_2 + \frac{\xi_3}{2}, \\
> \eta_2 &= -\frac{\xi_1}{2} - \frac{\xi_3}{2}.
> \end{aligned} \implies \mathbf{\eta} = \mathbf{C}\mathbf{\xi},\ \ \mathbf{C} = \begin{pmatrix}
> \frac{1}{2} & -1 & \frac{1}{2} \\
> -\frac{1}{2} & 0 & -\frac{1}{2}
> \end{pmatrix}.$$
> **2. 高斯分布的线性变换性质：** 
> 如果$\mathbf{\xi} \sim N(\mathbf{a}, \mathbf{B})$，则$\mathbf{\eta} = \mathbf{C}\mathbf{\xi}$的分布仍然是高斯分布：
> $$\mathbf{\eta} \sim N(\mathbf{\mu}\eta, \mathbf{\Sigma}\eta),$$
> 其中$\mathbf{\mu}_\eta = \mathbf{C}\mathbf{a}, \ \mathbf{\Sigma}_\eta = \mathbf{C}\mathbf{B}\mathbf{C}^T.$
> **3. 计算**$\mathbf{\mu}_\eta$：$$\mathbf{\mu}\eta = \mathbf{C}\mathbf{a},$$
> **其中**$\mathbf{a} = (a_1, a_2, a_3){\prime}$**。直接计算：**$$\mathbf{\mu}\eta =
> \begin{pmatrix}
> \frac{1}{2} & -1 & \frac{1}{2} \\
> -\frac{1}{2} & 0 & -\frac{1}{2}
> \end{pmatrix}
> \begin{pmatrix}
> a_1 \\ a_2 \\ a_3
> \end{pmatrix}
> \begin{pmatrix}
> \frac{a_1}{2} - a_2 + \frac{a_3}{2} \\
> -\frac{a_1}{2} - \frac{a_3}{2}
> \end{pmatrix}.$$
> 因此：$$\mathbf{\mu}_\eta = \begin{pmatrix}
> \frac{a_1 + a_3}{2} - a_2 \\
> -\frac{a_1 + a_3}{2}
> \end{pmatrix}.$$
> **4. 计算协方差矩阵**$\mathbf{\Sigma}_\eta$**：**$$\mathbf{\Sigma}\eta = \mathbf{C}\mathbf{B}\mathbf{C}^T,$$
> 其中$\mathbf{B} = (b{ij})_{3\times 3}$。先明确矩阵$\mathbf{C}$的转置：$$\mathbf{C}^T = \begin{pmatrix}
> \frac{1}{2} & -\frac{1}{2} \\
> -1 & 0 \\
> \frac{1}{2} & -\frac{1}{2}
> \end{pmatrix}.$$
> 计算$\mathbf{\Sigma}\eta$的分量需要具体矩阵运算：$$\mathbf{\Sigma}\eta =
> \begin{pmatrix}
> \frac{1}{2} & -1 & \frac{1}{2} \\
> -\frac{1}{2} & 0 & -\frac{1}{2}
> \end{pmatrix}
> \begin{pmatrix}
> b_{11} & b_{12} & b_{13} \\
> b_{12} & b_{22} & b_{23} \\
> b_{13} & b_{23} & b_{33}
> \end{pmatrix}
> \begin{pmatrix}
> \frac{1}{2} & -\frac{1}{2} \\
> -1 & 0 \\
> \frac{1}{2} & -\frac{1}{2}
> \end{pmatrix}.$$
> **最终结果：**$\mathbf{\eta} = (\eta_1, \eta_2){\prime}$的分布为：
> $$\mathbf{\eta} \sim N\left(\mathbf{\mu}\eta, \mathbf{\Sigma}\eta\right),$$
> 其中：$$\mathbf{\mu}\eta = \begin{pmatrix}\frac{a_1 + a_3}{2} - a_2 \\-\frac{a_1 + a_3}{2}\end{pmatrix},$$$$\mathbf{\Sigma}\eta = \mathbf{C}\mathbf{B}\mathbf{C}^T= \begin{pmatrix}
0.25b{11} - 1.0b_{12} + 0.5b_{13} + b_{22} - 1.0b_{23} + 0.25b_{33} & -0.25b_{11} + 0.5b_{12} - 0.5b_{13} + 0.5b_{23} - 0.25b_{33} \\
-0.25b_{11} + 0.5b_{12} - 0.5b_{13} + 0.5b_{23} - 0.25b_{33} & 0.25b_{11} + 0.5b_{13} + 0.25b_{33}
\end{pmatrix}.$$

