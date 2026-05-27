---
title: Chapter-7-Parameter-estimation
tags:
  - PMS
date: 2026-01-31 00:00:08
---

**Estimation**
For an unknown parameter $\theta$ in the population distribution, we construct a statistic $\hat \theta(X_1, X_2, …,X_n)$ to give an estimation, we call $\hat \theta(X_1, X_2, …,X_n)$ an estimator, $\hat \theta(x_1, x_2, …,x_n)$ an estimated value.
Without making confusion, call estimator and estimated value collectively **estimation.**
### Point Estimation
#### Moment estimation
Theoretical foundation: Law of large numbers, $n → +\infty, A_k \overset{P} \longrightarrow \mu_k, B_k \overset{P}\longrightarrow \nu_k$
$\mu_k = EX^k = \frac{1}{n}\sum^n_{i=1}X_i^k, k =1,2,...$ or $\nu_k = E(X- EX)^k = \frac{1}{n}\sum^n_{i=1}(X_i-\bar X)^k, k =1,2,…$
Therefore, use $A_k, B_k$ to estimate $\mu_k, \nu_k$, we can solve unknown parameters $\theta_1, \theta_2, … ,\theta_m$ by listing equations:
$$\left \{ \begin{array} {lcr} \mu_1 = EX = g_1(\theta_1, \theta_2, … ,\theta_m) \\ \mu_2 = EX^2 = g_2(\theta_1, \theta_2, … ,\theta_m) \\ ... \\ \mu_m = EX^m = g_m(\theta_1, \theta_2, … ,\theta_m) \end{array} \right. \longrightarrow \left \{ \begin{array} {lcr} \theta_1 = h_1(\mu_1, \mu_2, ..., \mu_m) \\ \theta_2 = h_2(\mu_1, \mu_2, ..., \mu_m) \\ ... \\ \theta_m = h_m(\mu_1, \mu_2, ..., \mu_m) \end{array} \right. \longrightarrow \left \{ \begin{array} {lcr} \hat\theta_1 = h_1(A_1, A_2, ..., A_m) \\ \hat\theta_2 = h_2(A_1, A_2, ..., A_m) \\ ... \\ \hat\theta_m = h_m(A_1, A_2, ..., A_m) \end{array} \right.$$

> **Here origin moment and central moment are completely equivalent.**  
> Take  
> $\mu, \sigma^2$ as example, the **solution process**:  
> Method 1: Origin moment  
> (1)   $\left \{ \begin{array} {lcr} \mu_1 = E(X) = \mu \\ \mu_2 = E(X)^2 = D(X)+E(X^2) = \mu^2+\sigma^2 \end{array} \right.$  
> (2)   $\left \{ \begin{array} {lcr} \mu =\mu_1 \\ \sigma^2 = \mu_2 -\mu_1^2 \end{array} \right.$  
> (3) use   $A_1$ to estimate $\mu_1$, $A_2$ to estimate $\mu_2$, then   $\left \{ \begin{array} {lcr} \hat {\mu} = A_1 \\ \hat{\sigma^2} = A_2-A_1^2= E(\bar X^2)-E^2(\bar X) = D(\bar X) = B_2 \end{array} \right.$  
> Method 2: Central moment  
> (1)   $\left \{ \begin{array} {lcr} \nu_1 = E(X-E(X)) = 0 = \mu-\mu_1 \\ \nu_2 = D(X) = \sigma^2 \end{array} \right.$  
> (2)   $\left \{ \begin{array} {lcr} \mu =\mu_1 \\ \sigma^2 = \nu_2 \end{array} \right.$  
> (3) use  $B_2$ to estimate $\nu_2$, then  
>   
> $\left \{ \begin{array} {lcr} \hat {\mu} = A_1 \\ \hat{\sigma^2} = B_2 \end{array} \right.$

> [!important]  **e.g.1 $X\sim U(\mu-\rho, \mu+\rho), \mu, \rho>0$ are unknown, give the expression of $\hat\mu, \hat\rho$.**
> (1) $\left \{ \begin{array} {lcr} \mu_1 = E(X) = \mu \\ \nu_2 = D(X)= \frac{(\mu+\rho -\mu+\rho)^2}{12}= \frac{1}{3}\rho^2 \end{array} \right.$
> Note:  $\mu_1, \nu_2$ are the most commonly ued pairs 
> (2) $\left \{ \begin{array} {lcr} \mu = \mu_1 \\ \rho = \sqrt{3\nu_2} \end{array} \right.$ 
> (3) use $A_1$ to estimate $\mu_1$, use $B_2$ to estimate $\nu_2$, then $\left \{ \begin{array} {lcr} \hat \mu = A_1 \\ \hat \rho = \sqrt{3B_2} \end{array} \right.$.

#### Maximum likelihood estimation
Theoretical foundation: $P(A) = F(\theta), $ now that $A$ happens, then choose the estimated value of $\theta$ with $P(A)_{\max}$.
Discrete population
$X_1, X_2, …, X_n$ are samples from $X$, $x_1, x_2, …, x_n$ are the sample values, the mass distribution is $P\{X=x\} =p(x;\theta)$, then
$P\{X_1 = x_1, X_2 =x_2,…,X_n= x_n\} = P\{X_1 = x_1\}P\{X_2 = x_2\}…P\{X_n = x_n\} = \prod^n_{i=1}P\{X_i =x_i\}$
$= \prod^n_{i=1} p(x_i;\theta) \equiv L(\theta, x_1, x_2, …, x_n)\overset{x_1, x_2, …, x_n\text{ given}}=L(\theta)$, the **likelihood function**.
Continuous population
$X_1, X_2, …, X_n$ are samples from $X$, $x_1, x_2, …, x_n$ are the sample values, the density function$f(x;\theta)$, then
**likelihood function** $L(\theta) = \prod^n_{i=1} f(x_i;\theta)$.
therefore, $\hat \theta(x_1,x_2, ..., x_n)$ satisfies $L(\hat \theta)=\max_{\theta \in \Theta} L(\theta,x_1,x_2, ..., x_n)$ is called the maximum likelihood estimated value, the corresponding $\hat \theta(X_1,X_2,…, X_n)$ is called the maximum likelihood estimation(MLE).
**Solution process**:
(1) write down $L(\theta)= \prod^n_{i=1} p(x_i;\theta) $ or $L(\theta) = \prod^n_{i=1} f(x_i;\theta)$;
(2) take logarithm of both sides: $\ln L(\theta) = \sum^n_{i=1} \ln p(x_i, \theta) \equiv l(\theta)$ , **log-likelihood function**;
(3) solve **log-likelihood equation**: $\frac{dl(\theta)}{d\theta}|_{\theta = \hat \theta} = 0$ and get $\hat \theta$.

> [!important]  **e.g.1 Population $X$, $f(x) = \left \{ \begin{array} {lcr} \sqrt{\theta} x^{\sqrt{\theta}-1} &, 0≤x≤1 \\ 0 & , \text{elsewhile} \end{array} \right.,\theta>0$ unknown, $(X_1, X_2, …, X_n)$ are samples from** $X$**, solve MLE of** $\theta$. 
> $L(\theta) = \prod^n_{i=1} \sqrt{\theta} x_i^{\sqrt{\theta}-1} = \theta^{\frac{n}{2}}(\prod^n_{i=1}x_i)^{\sqrt{\theta}-1}$ \# don’t forget the subscript then $l(\theta) = \frac{n}{2}\ln\theta+(\sqrt{\theta}-1)\sum^n_{i=1} \ln x_i, \frac{dl(\theta)}{d\theta}= \frac{n}{2\theta}+\frac{1}{2\sqrt{\theta}}\sum^n_{i=1} \ln x_i=0,$ then $\theta = n^2(\sum^n_{i=1} \ln x_i)^{-2}$. \# usually no need for verification therefore, MLE of $\theta$ is $\hat \theta_L = n^2(\sum^n_{i=1}\ln X_i)^{-2}$. \# substitute $x_i$ with $X_i$

In some situations, the differential method cannot work out, then return to the definition.

> [!important]  **e.g.2 Population** $X\sim U[0, \theta], \theta>0$ **unknown, $(X_1, X_2, …, X_n)$ are samples from** $X$**, solve MLE of** $\theta$.
> $f(x) = \left \{ \begin{array} {lcr} \frac{1}{\theta} &, 0≤x≤\theta \\ 0 & , \text{elsewhile} \end{array} \right.$, then $L(\theta) = \prod^n_{i=1} f(x_i)= \left \{ \begin{array} {lcr} \frac{1}{\theta^n} &, 0≤x_1, x_2, ..., x_n≤\theta \\ 0 & , \text{elsewhile} \end{array} \right.$ therefore $l(\theta)=-n\ln \theta$, $\frac{dl(\theta)}{d\theta}= -\frac{n}{\theta} \ne0$, we cannot use diffential method to solve $\hat \theta_L$. 
> **Definition method:** from $L(\theta)$, we see that when $0≤x_1, x_2, ..., x_n≤\theta$, $L(\theta)$ is a decreasing function of $\theta$, the smaller $\theta$ is, the bigger $L(\theta)$ is. However, $\theta$ must be bigger than any $x_i$, or $L(\theta) =0$. Therefore, $\hat \theta_L = \max\{x_1, x_2, ..., x_n\}$. 
> **Practice. What if** $X\sim U[\theta, 2\theta], \theta>0?$

> [!important]  **e.g.3** $f(x) = \left \{ \begin{array} {lcr} \frac{1}{\theta}e^{-\frac{x-\mu}{\theta}} &, x≥\mu \\ 0 & , \text{elsewhile} \end{array} \right.$, **give the expression of** $\hat \mu_L, \hat\theta_L.$
> Method 1: Moment estimation 
> $\mu_1 = E(X) = \int^{+\infty}_{-\infty}xf(x)dx = \int^{+\infty}_{\mu} \frac{x}{\theta}e^{-\frac{x-\mu}{\theta}}dx=\mu+\theta$ $\nu_2 = D(X) = E(X-\mu-\theta)^2=\int^{+\infty}_{\mu} (x-\mu-\theta)^2\frac{1}{\theta}e^{-\frac{x-\mu}{\theta}}dx\overset{x-\mu\equiv t}=\int^{+\infty}_{0}(t-\theta)^2\frac{1}{\theta}e^{-\frac{t}{\theta}}dt=\theta^2$ therefore $\mu = \mu_1 -\sqrt{\nu_2}, \theta = \sqrt{\nu_2}$ replace $\mu_1$ with $\bar X$, $\nu_2$ with $B_2$, then $\hat \theta = \sqrt{B_2} = \sqrt{\frac{1}{n}\sum^n_{i=1}(X_i-\bar X)^2}$, $\bar \mu = \bar X - \sqrt{B_2} = \bar X - \sqrt{\frac{1}{n}\sum^n_{i=1}(X_i-\bar X)^2}$. 
> Method 2: MLE 
> $L(\mu, \theta)= \prod^n_{i=1}\theta^{-1}e^{-\frac{x-\mu}{\theta}} = \theta^{-n}e^{-\frac{1}{\theta}\sum^n_{i=1}(x_i-\mu)},x_1,x_2, ...,x_n\ge\mu.$ then $l(\mu, \theta) = -n\ln \theta-\frac{1}{\theta}\sum^n_{i=1}(x_i-\mu)=-n\ln \theta-\theta^{-1}(n\bar X-n\mu)$ $\frac{\partial l(\mu, \theta)}{\partial \theta}=0\iff-\frac{n}{\theta}+\frac{n\bar X -n\mu}{\theta^2}=0\Rightarrow \theta = \bar X-\mu.$ $\frac{\partial l(\mu, \theta)}{\partial \mu}=0\iff$ $\frac{n}{\theta}=0$ no solution, therefore cannot use the differential method. $\frac{\partial l(\mu, \theta)}{\partial \mu}>0$, then $L(\mu, \theta)$ is a increasing function of $\mu$, however $\mu$ must be smaller than any $x_i$, otherwise $L(\mu, \theta)=0$. Therefore, $\hat \mu_L=\min\{x_1, x_2, …, x_n\}$, $\hat \theta_L = \bar X - \min\{x_1, x_2, …, x_n\}$.

| Distribution             | Unknown Parameter | Moment estimation                                                                                               | Maximum likelihood Estimation                                                                                |
| ------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| $X \sim B(1, p)$         | $p$               | $\bar X$                                                                                                        | $\bar X$                                                                                                     |
| $X\sim B(m, p)$          | $p$               | $\frac{\bar X}{m}$                                                                                              | $\frac{\bar X}{m}$                                                                                           |
| $X \sim \pi (\lambda)$   | $\lambda$         | $\bar X$                                                                                                        | $\bar X$                                                                                                     |
| $X\sim U[a, b]$          | $a, b$            | $\left \{ \begin{array} {lcr} \hat a = \bar X -\sqrt{3B_2} \\ \hat b= \bar X + \sqrt{3B_2} \end{array} \right.$ | $\left \{ \begin{array} {lcr} \hat a = \min(X_1, ...,X_n) \\ \hat b= \max(X_1, ...,X_n) \end{array} \right.$ |
| $X\sim E(\lambda)$       | $\lambda$         | $\frac{1}{\bar X}$                                                                                              | $\frac{1}{\bar X}$                                                                                           |
| $X\sim N(\mu, \sigma^2)$ | $\mu, \sigma^2$   | $\left \{ \begin{array} {lcr} \hat \mu = \bar X \\ \hat {\sigma^2} = B_2 \end{array} \right.$                   | $\left \{ \begin{array} {lcr} \hat \mu = \bar X \\ \hat {\sigma^2} = B_2 \end{array} \right.$                |
$\hat \theta$ is MLE of $\theta$, and $g(\theta)$ is a continuous function of $\theta$, then $g(\hat \theta)$ is a MLE of $g(\theta)$. $\iff \widehat{g(\theta)} = g(\hat \theta)$

> [!important]   **e.g.4** $X\sim N(\mu, \sigma^2), X_1, X_2, …, X_n$ **are samples, solve** $\hat P_L(X<t)$.
> $P(X<t) =\Phi(\frac{t-\mu}{\sigma})$ for normal distribution, $\hat \mu_L = \bar X, \hat\sigma_L = \sqrt{B_2}$, therefore $\hat P_L(X<t) =\Phi(\frac{t-\bar X}{\sqrt{B_2}})=\Phi(\sqrt{\frac{n}{n-1}}\frac{t-\bar X}{S})$.


### Evaluation Criteira
#### 1.Unbiased estimation
$\hat \theta$ is an unbiased estimation of $\theta$, if $E(\hat \theta) = \theta ,\forall \theta \in \Theta.$
if $E(\hat \theta) ≠ \theta$, call $E(\hat \theta) - \theta$ the bias of $\hat \theta$.
if $E(\hat \theta) ≠ \theta$ but $\lim_{n→ +\infty}E(\hat \theta) = \theta$, then call $\hat \theta$ an asymptotic unbiased estimation of $\theta$.


> [!important]  **e.g.5 $X\sim f(x)= \frac{1}{2\mu}e^{-\frac{|x|}{\mu}}, -\infty<x<+\infty$, $X_1, X_2, …, X_n$ are samples, solve the MLE of $\mu$, and prove that it’s an unbiased estimation of** $\mu$. 
> $L(\mu) = \prod^n_{i=1} \frac{1}{2\mu}e^{-\frac{|x|}{\mu}}=2^{-n}\mu^{-n}e^{-\frac{1}{\mu}\sum^n_{i=1}|x_i|}, l(\mu) = -n\ln2-n\ln\mu-\frac{1}{\mu}\sum^n_{i=1}|x_i|.$ $\frac{dl(\mu)}{d\mu}= -\frac{n}{\mu}+\frac{1}{\mu^2}\sum^n_{i=1}|x_i|=0\Rightarrow \hat{\mu}_L= \frac{1}{n}\sum^n_{i=1}|X_i|.$ $E(\hat{\mu}_L)=E(\frac{1}{n}\sum^n_{i=1}|X_i|)= \frac{1}{n}\sum^n_{i=1}E|X_i|=E|X| = \int^{+\infty}_{-\infty}|x|f(x)dx = \int^{+\infty}_{-\infty}|x|\frac{1}{2\mu}e^{-\frac{|x|}{\mu}}dx=\mu.$ Therefore it’s unbiased.

> [!important]  **e.g.6 Test the unbiasedness of moment estimator** $\hat \theta = 2\bar X$ **and MLE** $\hat \theta_L = max\{X_1, X_2, …, X_n\}$ **of parameter** $\theta$ **of population** $X\sim U[0,\theta]$.
> $E(\hat \theta) = E( 2\bar X) = 2E(\bar X)=2E(X) = 2\cdot \frac{\theta}{2}=\theta,$ therefore it’s unbiased. $E(\hat \theta_L)=E(max\{X_1,…,X_n\})$, let $Y=max\{X_1, …,X_n\}$, $X\sim U[0,\theta]$, therefore $F_Y(y)= P\{Y\le y\}= [F_X(y)]^n= \left \{ \begin{array} {lc} 0 &, y<0 \\ \frac{y^n}{\theta^n} & ,0\le y\le\theta \\ 1 & y>\theta \end{array} \right.$ $f_Y(y) =F'_Y(y) = \left \{ \begin{array} {lc} \frac{ny^{n-1}}{\theta^n} & ,0\le y\le \theta \\ 0 & , \text{elsewhile} \end{array} \right., E(\hat \theta_L)=\int^\theta_0y\frac{ny^{n-1}}{\theta^n}dy = \frac{n}{n+1}\theta$, therefore it’s not unbiased.

**Correcting**
1.if $E(\hat \theta) =a\theta +b , a\ne 0,$ then $\frac{\hat\theta -b}{a}$ is an unbiased estimation.
therefore, for e.g.6, $Y=\frac{n+1}{n}max\{X_1, ...X_n\}$ is an unbiased estimation.
2.if $\hat \theta$ is an unbiased estimation of $\theta$, and $D(\hat \theta)>0,$ then $(\hat\theta)^2$ is not unbiased.

> Proof: $E(\hat \theta)^2 = D(\hat \theta)+E^2(\hat \theta)>E^2(\hat \theta)=\theta^2.$

#### 2.Valid estimation
$\hat\theta_1, \hat\theta_2$ are two different unbiased estimator of $\theta$, is $\forall \theta \in\Theta, D(\hat\theta_1)\le D(\hat\theta_2)$, then we call $\hat \theta_1$ is more valid than $\hat \theta_2$.

> [!important]  **e.g.7 for samples** $(X_1, X_2, …,X_n)$ **in population** $X$, $X_i, \bar X$ **are both unbiased estimator of** $\mu = E(X)$, **but** $D(X_i) = D(X) = \sigma^2, D(\bar X)=\frac{1}{n}\sigma^2$**, therefore** $\bar X$ **is more valid.**

> [!important]  **e.g.8** $X\sim U[0, \theta]$, $(X_1, X_2, …,X_n)(n \ge 2)$ **are samples, given two unbiased estimation of** $\theta$**:** $\hat\theta_1=2\bar X, \hat\theta_2 = \frac{n+1}{n}max\{X_1,X_2,…,X_n\}$**(see e.g.6), tell which one is more valid.**
>  $D(\hat \theta_1) = D(2\bar X) = \frac{4}{n}D(X) = \frac{\theta^2}{3n}$. $D(\hat\theta_2) = D(\frac{n+1}{n}max\{X_1, X_2, ...,X_n\} )=(\frac{n+1}{n})^2D(Y)=\frac{\theta^2}{n(n+2)}.$ $n≥2,$ therefore $D(\hat\theta_1)>D(\hat \theta_2), \hat\theta_2$ is more valid.

#### 3.Mean Square Error Principle
$\hat \theta$ is a point estimation of $\theta$, and variation exists, then call $E(\hat \theta- \theta)^2$ the mean square error of the estimator $\hat\theta$, which is $Mse(\hat\theta)=Mse(\theta,\hat\theta)=Mse_\theta(\hat\theta)$.  
Mean square error principle: the smaller  
$Mse(\hat \theta) = E(\hat \theta-\theta)^2$ is, the better estimator $\hat \theta$ is.
if $\hat \theta$ is an unbiased estimator of $\theta$, then $Mse(\hat\theta) = E(\hat \theta - E(\hat\theta))^2 =D(\hat \theta).$


> [!important]  **e.g.9 Use sample variation** $S^2$ **and 2-order central moment** $B_2$ **to estimate the variation** $\sigma^2$ **of a normal population, by mean square error principle, tell which one is better.**
> $X\sim N(\mu, \sigma^2)$, then $\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1), E(S^2)=\sigma^2$, therefore, $Mse(S^2)=E(S^2-\sigma^2)^2 = D(S^2) =\frac{\sigma^4}{(n-1)^2}D(\frac{(n-1)S^2}{\sigma^2})=\frac{2\sigma^4}{n-1}.$ $Mse(B_2)= E(B_2-\sigma^2)^2=D(B_2-\sigma^2)+E^2(B_2-\sigma^2)\overset{\sigma^2\text{is a constant}}=D(B_2)+[E(B_2)-\sigma^2]^2$ $= D(\frac{n-1}{n}S^2)+[E(\frac{n-1}{n}S^2)-\sigma^2]^2=\frac{(n-1)^2}{n^2}D(S^2)+(\frac{n-1}{n}\sigma^2-\sigma^2)^2=\frac{2n-1}{n^2}\sigma^4.$ $n>1$, therefore $Mse(B_2)<Mse(S^2)$, $B_2$ is a better estimator.

#### 4.Consistent estimation
$\hat \theta$ is an estimation of parameter $\theta$, if $\forall \theta \in \Theta, n \rightarrow +\infty, \hat \theta_n \overset{P}\rightarrow \theta,$ then call $\hat \theta$ a consistent estimation of $\theta$.
To tell whether an estimation is consistent, usually we need _law of large numbers_ or _Chebyshev inequality_.

> An unbiased estimation is not necessarily a consistent estimation, and a consistent estimation is neither necessarily an unbiased estimation.

If $g(\mu_1, \mu_2, …,\mu_k)$ is a continuous function, then $g(A_1, A_2, …, A_k)$ is a consistent estimation of $g(\mu_1, \mu_2, …,\mu_k)$.

> [!important]  **e.g.10 For population $X$, each-order original moment $E(X^j)=\mu_j$ exists,** $X_1, X_2, …,X_n$ **are samples, prove: (1)** $A_j = \frac{1}{n}\sum^n_{i=1}X_i^j$ **is a consistent estimation of** $\mu_j$**; (2)** $B_2=\frac{1}{n} \sum^n_{i=1} (X_i-\bar X)^2$ **and** $S^2$ **are consistent estimations of** $D(X^2)=\sigma^2$; **(3)** $S$ **is a consistent estimation of** $\sigma$. 
> (1) From Khinchine’s law of large numbers, $\frac{1}{n}\sum^n_{i=1} X_i^j\overset{P}\rightarrow \mu_j.$ (2) $B_2 =A_2-A_1^2$, while $D(X)=\sigma^2 = \mu_2-\mu_1^2$, therefore $B_2\overset{P}\rightarrow \sigma^2$. $S^2= \frac{n-1}{n}B_2,$ therefore $n\rightarrow +\infty$, $S^2 \overset{P}\rightarrow \sigma^2.$ (3) $S=\sqrt{S^2}\overset{P}\rightarrow \sqrt{\sigma^2}=\sigma$.

> A necessary condition for an estimator to be consistent:  
> $n\rightarrow +\infty, D(\hat \theta)→0$.

> [!important]  **e.g.10** $X\sim U[0, \theta]$, $(X_1, X_2, …,X_n)(n \ge 2)$ **are samples, given two unbiased estimation of** $\theta$**:** $\hat\theta_1=2\bar X, \hat\theta_2 = \frac{n+1}{n}max\{X_1,X_2,…,X_n\}$**(see e.g.6), prove that they are both consistent.** 
> $D(\hat \theta_1) = \frac{\theta^2}{3n}$, $D(\hat\theta_2) =\frac{\theta^2}{n(n+2)}.$(see e.g.8) From Chebyshev inequality, $\forall \epsilon>0, n\rightarrow+\infty$, $P\{|\hat\theta_1-\theta|<\epsilon\}\ge1-\frac{\sigma^2}{\epsilon^2}\overset{n\rightarrow+\infty}\rightarrow1.$ $P\{|\hat \theta_2 -\theta|< \epsilon\} ≥ 1 - \frac{\theta^2}{n(n+2)\epsilon^2}\overset{n\rightarrow+\infty}\rightarrow1.$ Therefore, $\hat\theta_1, \hat\theta_2$ are consistent estimations. (Note that $\hat\theta_1 = 2\bar X = \frac{2}{n}\sum^n_{i=1}X_i,$ therefore from Khinchine’s law of large numbers, we can also directly get that $\hat \theta_1 \overset{P}\rightarrow \theta.$

> [!important]  **e.g.11 $X, (X_1, …, X_n)$ are samples, $E(X) =\mu, D(X) = \sigma^2$, let $T=a_1X_1 +a_2X_2+…+a_nX_n,$ then (1) What’s the condition if $T$ is unbiased? (2) Among all unbiased conditions, which is most valid?**
> (1) $E(T) = E(a_1X_1+a_2X_2+…+a_nX_n) = (a_1+…+a_n)\mu= E(X)=\mu$. therefore, $a_1+…+a_n =1$. (2) $D(T) = D(a_1X_1+a_2X_2+…+a_nX_n)=\sigma^2\sum^n_{i=1}a_i^2\ge \frac{1}{n}\sigma^2$, only when $a_i = \frac{1}{n}$,the “$=$” holds. Therefore $T = \frac{1}{n} \sum^n_{i=1} X_i = \bar X$.

> [!important]  **e.g.12** $(X_1, …,X_{n_1}), (Y_1, …, Y_{n_2})$ **are respectively samples from** $N(\mu_1, \sigma^2), N(\mu_2,\sigma^2)$**, and they are independent, with sample variation** $S_1^2, S_2^2$. **let** $T=aS_1^2+bS_2^2$**, then (1) What’s the condition if $T$ is unbiased? (2) Among all unbiased conditions, which is most valid?**
> (1) $E(T) =E(aS_1^2+bS_2^2) =aE(S_1^2)+bE(S_2^2) = (a+b)\sigma^2=\sigma^2$. therefore, $a+b=1$. (2) $D(T) = D(aS^2_1+bS^2_2) = a^2D(S_1^2)+b^2D(S_2^2)=\frac{2\sigma^4}{n_1-1 }a^2+\frac{2\sigma^4}{n_2-1 }b^2=\frac{2\sigma^4}{n_1-1 }a^2+\frac{2\sigma^4}{n_2-1 }(1-a)^2$. $\frac{dD(T)}{da}=0$, then $a =\frac{n_1-1}{n_1+n_2-2}, b =\frac{n_2-1}{n_1+n_2-2}$. Therefore, $T = S_w^2$. \[Two normal population]

> [!important]  **e.g.13 $f(x; \theta) =\left \{\begin{array} {lc} \frac{\sqrt[\theta]{x}}{\theta x} &, 0<x<1 \\ 0 & ,\text{elsewhile} \end{array} \right.$, $(X_1, …, X_n)$ are samples, (1) solve the moment estimator $\hat\theta_1$ of $\theta$, and identify whether it’s consistent; (2) solve the MLE $\hat \theta_2$ of $\theta$, and identify whether it’s unbiased.**
> (1) $\mu_1=E(X)=\frac{1}{\theta+1},$ then $\hat\theta_1 = \frac{1-A_1}{A_1}= \frac{1-\bar X}{\bar X}.$ To use Chebyshev inequality here, we needs to solve out the variation. But, from Khinchine’s law of large numbers, $\bar X \overset{P}\rightarrow E(X) =\frac{1}{\theta+1}.$ Therefore for continuous function $\hat \theta_1 = \frac{1-\bar X}{\bar X} \overset{P}\rightarrow \frac{1-\frac{1}{\theta+1}}{\frac{1}{\theta+1}}= \theta,$ it’s consistent. 
> (2) $L(\theta)=(\prod^n_{i=1} x_i)^{\frac{1}{\theta}-1}\theta^{-n},l(\theta)=\ln L(\theta)=(\frac{1}{\theta}-1)\sum^n_{i=1}\ln x_i-n\ln \theta.$ $\frac{dl(\theta)}{d\theta} =-\sum^n_{i=1}\ln x_i\frac{1}{\theta^2}-\frac{n}{\theta}=0$, then $\hat\theta_2 = -\frac{1}{n}\sum^n_{i=1}\ln X_i$. $E(\hat\theta_2)=E(-\frac{1}{n}\sum^n_{i=1}\ln X_i)=-E(\ln X)=-\int^1_0\ln x\cdot x^{\frac{1}{\theta}-1}\theta^{-1}dx=-\int^1_0\ln xd(x^{\frac{1}{\theta}})=-\theta\int^{1}_0\ln tdt=\theta(t\ln t-t)|^1_0=\theta$. Therefore it’s unbiased.


### Interval estimation
Point estimation only gives a reference value of parameter, but does not offer the error range of the value.
But interval estimation gives a estimation range with the degree of reliability that the parameter is in the interval.
#### Confidence interval
The distribution function of population $X$ is $F(x;\theta)$, $(X_1, …X_n)$ are samples, for a given $\alpha(0<\alpha<1)$,
if $\exists$ estimators $\hat \theta_1 = \theta_1(X_1, …, X_n), \hat \theta_2 = \theta_2(X_1,…,X_n)$, s.t. $P\{\hat\theta_1<\theta<\hat\theta_2\}≥1-\alpha, \forall \theta\in \Theta.$
then call interval $(\hat\theta_1, \hat\theta_2)$ the **confidence interval** of $\theta$ with **confidence level** $1-\alpha$, call $\hat \theta_1$ the **lower confidence limit**, $\hat \theta_2$ the **upper confidence limit.**

> Implication:  
> Sample 100 times(same capacity  
> $n$), each sample determines an interval $(\hat \theta_1, \hat\theta_2)$.  
> From Bernoulli’s law of large numbers, among these intervals, about  
> $100(1-\alpha)\%$ includes $\theta$, **but not the probability that** $\theta$ **falls in a certain interval!**

Call the mean length $E(\hat\theta_2-\hat\theta_1)$ the **accuracy** of interval, $\frac{E(\hat\theta_2-\hat\theta_1)}{2}$ the **error limit.**

> Length $\nearrow$, confidence $\nearrow$, accuracy $\searrow$.

##### Neyman-Pearson Lemma
Among intervals with same confidence level, choose the one with highest accuracy.
###### Equal confidence interval

###### One-sided confidence interval
The distribution function of population $X$ is $F(x;\theta)$, $(X_1, …X_n)$ are samples, for a given $\alpha(0<\alpha<1)$,
if $\exists$ estimators $\hat \theta_1 = \theta_1(X_1, …, X_n)$, s.t. $P\{\theta>\hat\theta_1\}≥1-\alpha, \forall \theta\in \Theta.$
then call $\hat \theta_1$ the **one-sided lower confidence limit** of $\theta$ with confidence level $1-\alpha$, $(\hat\theta_1, +\infty)$ one-sided confidence interval.

if $\exists$ estimators $\hat \theta_2 = \theta_2(X_1, …, X_n)$, s.t. $P\{\theta<\hat\theta_2\}≥1-\alpha, \forall \theta\in \Theta.$
then call $\hat \theta_1$ the **one-sided upper confidence limit** of $\theta$ with confidence level $1-\alpha$, $(-\infty, \hat\theta_2)$ one-sided confidence interval.

if $\hat \theta_1$ is a one-sided lower confidence limit of $\theta$ with confidence level $1-\alpha_1,$ $\hat\theta_2$ a one-sided upper confidence limit of $\theta$ with confidence level $1-\alpha_2$,
then $(\hat\theta_1, \hat\theta_2)$ is a confidence interval of $\theta$ with confidence level $1-\alpha_1-\alpha_2$.

> [!important]  **e.g.14 $X\sim N(\mu, \sigma^2), X_1, …, X_n$ are samples, $\sigma^2$ known, solve the confidence interval of $\mu$ with confidence level $1-\alpha$.** 
> Because $\hat \mu = \hat \mu_L=\bar X$, it is rational to take $\bar X$ as estimator of $\mu$. $d_1,d_2>0, P(\bar X-d_1<\mu<\bar X+d_2)=1-\alpha$ $\iff P(-d_2<\bar X-\mu < d_1) = 1-\alpha \iff P(\frac{-d_2}{\frac{\sigma}{\sqrt{n}}}<\frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}<\frac{d_1}{\frac{\sigma}{\sqrt{n}}}) = 1-\alpha\iff P(k_1<\frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}<k_2) =1-\alpha$. From Neyman-Pearson Lemma, take $k_2=z_\frac{\alpha}{2}=-k_1$. then $P(-z_\frac{\alpha}{2}<\frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}<z_\frac{\alpha}{2}) =1-\alpha \Rightarrow P(\bar X-z_\frac{\alpha}{2}\frac{\sigma}{\sqrt{n}}<\mu<\bar X+z_\frac{\alpha}{2}\frac{\sigma}{\sqrt{n}})=1-\alpha.$ therefore the confidence interval is $(\bar X-z_\frac{\alpha}{2}\frac{\sigma}{\sqrt{n}},\bar X+z_\frac{\alpha}{2}\frac{\sigma}{\sqrt{n}})$.

From solving the question above, we’ve already applied the Pivot method.
#### Pivot
Pivot: sample functions with unknown parameter, and the distribution does not depend on the parameter.
Statistic: sample functions without unknown parameter.
##### Pivot Method to solve a confidence interval
**Step 1.** 
Construct a sample function $G(X_1, …,X_n; \theta)$ that
(1) includes unknown parameter $\theta$;
(2) includes a point estimation of $\theta$, such as an unbiased estimation;
(3) includes known information of population;
(4) does not include unknown parameters other than $\theta$;
(5) has a known distribution.

**Usual pivot used in normal population**
**1. Single normal population $N(\mu,\sigma^2)$**
- (1) $\sigma^2$ known, $\mu$: $G=\frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}\sim N(0,1)$;
	- Confidence interval: $(\bar X - \frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2},\bar X +\frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2})=(\bar X\pm \frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2})$
	- One-sided lower confidence limit: $\bar X - \frac{\sigma}{\sqrt{n}}z_\alpha$  
	- One-sided upper confidence limit: $\bar X + \frac{\sigma}{\sqrt{n}}z_\alpha$
- (2) $\sigma^2$ unknown, $\mu$: $G=\frac{\bar X-\mu}{\frac{S}{\sqrt{n}}}\sim t(n-1)$;
- (3) $\mu$ known, $\sigma^2$: $G=\frac{(n-1)S^2}{\sigma^2} = \sum^n_{i=1} (\frac{X_i-\mu}{\sigma})^2 \sim \chi^2(n)$.
- (4) $\mu$ unknown, $\sigma^2$: $G=\frac{(n-1)S^2}{\sigma^2} = \sum^n_{i=1} (\frac{X_i-\bar X}{\sigma})^2 \sim \chi^2(n-1)$.

**2. Two normal population $N(\mu_1, \sigma^2_1), N(\mu_2, \sigma^2_2)$**
- (1) $\sigma^2_1, \sigma_2^2$ known, $\mu_1-\mu_2$: $\frac{(\bar X-\bar Y) - (\mu_1-\mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}}}\sim N(0, 1)$;
	- $\sigma_1^2 =\sigma_2^2$ unknown, $\mu_1-\mu_2$: $\frac{(\bar X-\bar Y) - (\mu_1-\mu_2)}{S_w\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}\sim t(n_1+n_2-2)$, where $S_\omega = \sqrt{\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}}$

> Why do we want to know about $\mu_1 - \mu_2$?  
> **Example 1**: in order to examine the antihypertensive effect of a particular antihypertensive drug, the blood pressure (systolic) of  
> $n$ hypertensive patients before and after taking the drug was tested as $(X_1, Y_1), (X_2,Y_2), …,(X_n, Y_n)$.  
> Apparently, here  
> $X_i$ or $Y_i$ should not be seen as samples from a same population ,which means they are not same-distributed. Besides, for an individual, $X_i, Y_i$ are also not independent.  
> However, if we take difference of $X_i$ and $Y_i$, and get $D_i = X_i-Y_i$, we eliminated the difference between individuals, therefore we can see $D_i, i=1,…,n$ as independent samples from $N(\mu_d, \sigma_d^2)$.  
> **Example 2**: The yield of two types of wheat are different, but we can see the difference of yield as a variable that obeys normal distribution. In this case, if the confidence interval lower limit is bigger than  
> $0$, then we say the former type has a higher yield.  
>   
> **If the interval includes** $0$**, we say that there is no significant difference between the two mean value.**

* (2) $\sigma_1 \ne \sigma_2$ unknown, $\mu_1 -\mu_2$:
	- (i) $n_1, n_2$ big enough: From CLT, $\frac{(\bar X-\bar Y) - (\mu_1-\mu_2)}{\sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}}}\overset{\cdot}\sim N(0,1)$
	- (ii) $n_1, n_2$ are finite small samples: $\frac{(\bar X-\bar Y) - (\mu_1-\mu_2)}{\sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}}}\overset{\cdot}\sim t(k),$ where $k =\frac{(\frac{S_1^2}{n_1} +\frac{S_2^2}{n_2})^2}{\frac{S_1^4}{n_1^2(n_1-1)}+\frac{S_2^4}{n_2^2(n_2-1)}}$. In practice, $k \approx min\{n_1-1, n_2-1\}$.
- (3) $\mu_1, \mu_2$ known, $\frac{\sigma_1^2}{\sigma_2^2}$: $\frac{\frac{\sum^{n_1}_{i=1}(X_i -\mu_1)^2}{n_1}}{\frac{\sum^{n_2}_{i=1}(X_i -\mu_2)^2}{n_2}}/\frac{\sigma_1^2}{\sigma_2^2}\sim F(n_1, n_2)$;
- (4) $\mu_1, \mu_2$ unknown, $\frac{\sigma_1^2}{\sigma_2^2}$: $\frac{S_1^2}{S_2^2} / \frac{\sigma_1^2}{\sigma_2^2} \sim F(n_1-1, n_2-1)$

> **If the interval includes** $1$**, we say that there is no significance between the two variation.**

**Step 2.** 
From Neyman-Pearson Lemma, determine $(a,b)$ in which $a$ is as big as possible, $b$ is as small as possible and $P\{a<G(\theta)<b\} = 1-\alpha.$
- For a symmetric distribution, $a= z_{1-\frac{\alpha}{2}}, b =z_\frac{\alpha}{2}$.

**Step 3.**
Equivalent transformation:
$a<G(\theta)<b \Rightarrow \hat \theta_1 <\theta<\hat\theta_2,$ then $(\hat\theta_1, \hat\theta_2)$ is the confidence interval.
(One-sided confidence interval: $P\{a<G(\theta)\}=1-\alpha$, $a$ is the upper $1-\alpha$ quantile; or $P\{G(\theta)<b\} = 1-\alpha$, $b$ is the upper $\alpha$ quantile.)

> [!important]  **e.g.15 The height of a species of plant $X(cm)\sim N(\mu,\sigma^2),$ randomly choose** $36$ **of them, the mean height is** $15cm$**, solve the** $95\%$ **confidence interval of** $\mu$ **under the conditions: (1)** $\sigma^2=16$**; (2)** $\sigma^2$ **unknown,** $S^2=16$**.**
> (1) $G = \frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}\sim N(0,1),$ then $P\{a<\frac{\bar X-\mu}{\frac{\sigma}{\sqrt{n}}}<b\} = 1 -\alpha =0.95$ From Neyman-Pearson Lemma, $a= -z_{0.025}, b=z_{0.025}=1.96,$ then $(\bar X - \frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2},\bar X +\frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2})=(15\pm\frac{4}{6}\times 1.96)=(13.693, 16.307).$ (2) $G= \frac{\bar X-\mu}{\frac{S}{\sqrt{n}}}\sim t(n-1)$, then $P\{ a< \frac{\bar X-\mu}{\frac{S}{\sqrt{n}}}<b\}=1-\alpha =0.95$ From Neyman-Pearson Lemma, $a = -t_{0.025}(35), b=t_{0.025}(35)=2.03$, then $(\bar X - \frac{S}{\sqrt{n}}t_\frac{\alpha}{2}(n-1),\bar X +\frac{S}{\sqrt{n}}t_\frac{\alpha}{2}(n-1))=(13.647, 16.353)$.

> Compare the two intervals, when $\sigma^2$ is known, the interval is shorter, which means it has a higher accuracy.


> [!important]  **e.g.16 The weight of a new species of apples obeys normal distribution, randomly choose 25 apples, find the variation $S^2 = 4.25$, solve the confidence interval with confidence level** $95\%$. $G = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$
> From Neyman-Pearson Lemma, choose the interval with relatively high accuracy. **Since** $\chi^2$ **distribution is asymmetric, choose** $\chi^2_{1-\frac{\alpha}{2}}(n-1)$ **as the lower limit,** $\chi^2_{\frac{\alpha}{2}}(n-1)$ **as the upper limit.** $P\{ \chi^2_{1-\frac{\alpha}{2}}(n-1)<\frac{(n-1)S^2}{\sigma^2} <\chi^2_{\frac{\alpha}{2}}(n-1)\} =1-\alpha$. then the interval is $(\frac{(n-1)S^2}{\chi^2_{\frac{\alpha}{2}}(n-1)}, \frac{(n-1)S^2}{\chi^2_{1-\frac{\alpha}{2}}(n-1)})=(2.59, 8.23).$

> [!important]  **e.g.17 Continue the discussion above about Example 1: the antihypertensive drug. Determination of the effect of antihypertensive drugs has now been converted to that of whether the confidence interval for the difference between pre- and post-blood pressure includes $0$. If so, then we perceive its ineffectiveness.**
> Let $\bar D = \frac{1}{n} \sum^n_{i=1} D_i, S_d^2 = \frac{1}{n-1} \sum^n_{i=1} (D_i-\bar D)^2$ $G = \frac{\bar D -\mu_d}{\frac{S_d}{\sqrt{n}}}\sim t(n-1)$, $P\{-t_\frac{\alpha}{2}(n-1) <\frac{\bar D -\mu_d}{\frac{S_d}{\sqrt{n}}}<t_\frac{\alpha}{2} (n-1)\} = 1 -\alpha$. then $P\{ \bar D -t_\frac{\alpha}{2} (n-1)\frac{S_d}{\sqrt{n}}<\mu_d< \bar D + t_\frac{\alpha}{2} (n-1) \frac{S_d}{\sqrt{n}}\} =1-\alpha.$ the confidence interval is $(\bar D \pm t_\frac{\alpha}{2} (n-1) \frac{S_d}{\sqrt{n}}).$
![](Image1.png)
Fig.1 Confidence interval and one-sided upper/lower confidence limit of $\mu, \sigma^2,$ etc. of normal population


### Interval estimation of non-normal population
population $X$ has a mean value $\mu,$ a variation $\sigma^2$, samples $X_1, …, X_n(n \text{ sufficiently big})$, then from CLT
$$\frac{ \sum^n_{i=1} X_i - n\mu}{\sqrt{n} \sigma} \overset{\cdot}\sim N(0,1)$$
therefore, the confidence interval of $\mu$ at confidence level $1-\alpha$ is $(\bar X\pm\frac{\sigma}{\sqrt{n}}z_\frac{\alpha}{2}).$
if $\sigma^2$ unknown, then use estimator $S^2$ to replace $\sigma^2$, get the interval $(\bar X\pm\frac{S}{\sqrt{n}}z_\frac{\alpha}{2}).$
if $n ≤ 50,$ experience shows that $t-$distribution has fine robustness, which is
$$\frac{\bar X -\mu}{\frac{S}{\sqrt{n}}}\overset{\cdot}\sim t(n-1)$$
therefore we have the confidence interval $(\bar X\pm\frac{S}{\sqrt{n}}t_\frac{\alpha}{2}(n-1)).$

> [!important]  $X\sim B(1,p), p$ unknown, $X_1, X_2, …, X_n$ are samples, $n>50.$ Solve the $1-\alpha$ confidence interval of $p$.
> From CLE,
> $$ G=\frac{\sum^n_{i=1}X_i -np}{\sqrt{np(1-p)}} = \frac{n\bar X - np}{\sqrt{np(1-p)}}\overset{\cdot}\sim N(0,1) $$
> then $P\{-z_\frac{\alpha}{2}<G<z_\frac{\alpha}{2}\}\approx 1-\alpha$. $-z_\frac{\alpha}{2}<G<z_\frac{\alpha}{2}\Rightarrow (n+z_{\frac{\alpha}{2}}^2)p^2 -(2n\bar X + z_\frac{\alpha}{2}^2)p+n\bar X^2<0\Rightarrow p_1, p_2(p_1<p_2)$. therefore, the confidence interval is $(p_1, p_2)$.


> [!important]  **e.g.2 $X \sim f(x) = \left \{ \begin{array} {lc} \lambda e^{-\lambda x} &,x>0 \\ 0 &, x≤0 \end{array} \right.$, $\lambda > 0$ unknown, $X_1, …, X_n$ are samples. (1) prove $2\lambda n \bar X \sim \chi^2(2n).$ (2) solve for upper $(1 -\alpha)$ confidence limit of $\lambda$.** 
> (1) $2\lambda n \bar X = 2\lambda X_1 +…+ 2\lambda X_n$, let $Y = 2\lambda X, y' =2\lambda >0$, reverse function: $x =\frac{y}{2\lambda}$. then $f_Y (y) = \left \{ \begin{array} {lc} f(\frac{y}{2\lambda})|(\frac{y}{2\lambda})|' = \frac{1}{2}e^{-\frac{y}{2}} & , y>0 \\ 0 & , y \le 0 \end{array} \right.$. **From $\chi^2$’s property: $E(\frac{1}{2}) = \chi^2(2)$,** $Y\sim \chi^2(2)$. therefore, $2\lambda n \bar X = n Y\sim \chi^2(2n).$ 
> (2) let $G=2\lambda n \bar X\sim\chi^2(2n),$ then $P(G<\chi^2_\alpha(2n)) = 1-\alpha.$ $\Rightarrow P(\lambda < \frac{\chi^2(2n)}{2n \bar X} ) = 1-\alpha$, the upper $1-\alpha$ limit is $\frac{\chi^2(2n)}{2n \bar X}.$

