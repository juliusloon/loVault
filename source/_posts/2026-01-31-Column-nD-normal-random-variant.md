---
title: Column-nD-normal-random-variant
tags:
  - PMS
date: 2026-01-31 00:00:05
---

> After Chapter 4

(1) n-D normal random variant $(X_1, X_2, …, X_n)\Rightarrow X_i$ are normal variant;
$X_i$ are **independent** normal variant $\Rightarrow (X_1, X_2,..., X_n)$ is an n-D normal random variant

(2) n-D normal random variant $(X_1, X_2, …, X_n) \iff \exists l_1, l_2, ..., l_n \in R$ not all zeros, s.t. $l_1X_1+l_2X_2+…+l_nX_n \sim N(\mu, \sigma^2)$

(3)**Linear transformation invariance**: n-D normal random variant $(X_1, X_2, …, X_n)$, $Y_1, Y_2, …, Y_n$ are linear functions of $X_i(i= 1,2,...,n)$, then $(Y_1,Y_2,…, Y_n) \sim N$ for k-D.

(4) for n-D normal random variant, independence $\iff$irrelevance.

> [!important]  **e.g.3 $(X,Y) \sim N(1,2;1,4;0.5),$ analyse the independence between** $X-1, Y-X-1$.
> let $U = X-1,$ then $U \sim N(0, 2)$. let $V = Y-X-1$, then $V$ is also normal distribution, $EV= E(Y-X-1)=-1, DV= D(Y-X-1)=D(Y-X) =D(Y)+D(X)-2Cov(X, Y)$ 
> $= 4+2-2\times 0.5 = 5$, thus $V\sim N(-1, 5)$. therefore $Cov(U, V) = E(UV)-EU\cdot EV = E(XY-X^2-Y+1)-0 = E(XY)-E(X^2)-E(Y)+1$
> $= E(X)E(Y)+Cov(X, Y)-[D(X)+E^2(X)]-E(Y)+1=1+0.5-3-1+1=-1.5\ne0$.

