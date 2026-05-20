---
title: Chapter-5-LLN-and-CLT
tags:
  - PMS
date: 2026-01-31 00:00:06
---

### Law of Large Numbers
#### Convergence - I
Given $0<p<1$, if $S_{n}\sim B(n,p)$, then 
$$
\frac{S_{n}}{n}\to p, \ n\to \infty
$$
(i) Fix $0<\varepsilon<\min\{p,1-p\}$, no matter how big $n$ is, it always happen that 
$$
| \frac{S_{n}}{n}-p|>\varepsilon
$$
which means
$$
P\left( \omega:| \frac{S_{n}(\omega)}{n}-p|>\varepsilon \right)>0
$$
(ii) In fact, Bernoulli found that (→ Bernoulli's law of large numbers)
$$
P\left( \omega:| \frac{S_{n}(\omega)}{n}-p|>\varepsilon \right)=\sum_{k:| \frac{k}{n} - p|>\varepsilon}\left( \begin{array} a n \\k\end{array}\right) p^k(1-p)^{n-k}\to{0},\ n\to \infty
$$
#### Convergence in probability - II
$$Y_n \overset{P}\longrightarrow c$$﻿
$\epsilon - n$﻿ language: $$\{Y_n, n\ge 1\}, \exists c, \forall \epsilon >0, \lim_{n \rightarrow +\infty} P\{ |Y_n - c| \ge \epsilon \} =0$$
##### Limit Uniqueness
If  $X_{n}\xrightarrow{ P }X, \ Y_{n}\xrightarrow{ P }Y$, then $$P(X=Y)=1$$

> [!quote] Proof
> $$P(X\neq Y)=P(|X-Y|>0)=P\left( \bigcup_{m=1}^{\infty}\left\{ X-Y \right\} > \frac{1}{m} \right)$$
> therefore, we prove it by showing that $$\forall \varepsilon>0, \ P(|X-Y|>\varepsilon)=0$$
> Given $\varepsilon>0$, $\forall n\geq 1$, $$\begin{align} P(|X-Y|>\varepsilon)&=P(|(X_{n}-X)-(X_{n}-Y)|>\varepsilon)\leq P(|X_{n}-X|+|X_{n}-Y|>\varepsilon) \\ &\leq P\left( |X_{n}-X|> \frac{\varepsilon}{2}  \right)+P\left( |X_{n}-Y|> \frac{\varepsilon}{2} \right) \end{align} $$while $$n\to \infty, P\left( |X_{n}-X|> \frac{\varepsilon}{2}  \right)\to 0,\ P\left( |X_{n}-Y|> \frac{\varepsilon}{2}  \right)\to0.$$so is the above equality proved.

##### Judgement Formula
if there exists a certain $r>0$ that $$
E|X_{n}-X|^{r}\to 0,\ n \to \infty
$$then $$X_{n}\xrightarrow{ P }X.$$
##### Properties
(i) Algorithm Properties: addition (subtraction) and multiplication (division) hold
$$X_{n}\xrightarrow{ P }X, \ Y_{n}\xrightarrow{ P }Y \implies \left\{ \begin{align}&
X_{n}\pm Y_{n} \xrightarrow{ P  } X\pm Y \\ &X_{n}\cdot Y_{n} \xrightarrow{ P }X\cdot Y \\&\text{ if } P(Y\neq 0)=1, \frac{X_{n}}{Y_{n}}\xrightarrow{ P } \frac{X}{Y} 
\end{align} \right.$$
(ii) A continuous map maintains convergence in probability
$f: \mathbb{R} \mapsto \mathbb{R}$ is a continuous map, if $X_{n}\xrightarrow{ P }X$, then $$
f(X_{n})\xrightarrow{ P }f(X)$$

> [!quote] Proof
> For arbitrarily small $\varepsilon, \eta$, we need to prove that $$\exists N=N(\varepsilon,\eta) ,\  s.t.\forall n\geq N, \ P(|f(X_{n})-f(X)|>\varepsilon)\leq \eta$$Notice that $F_{X}(+\infty)=1,F_{X}(-\infty)=0,$ therefore $$\exists M>0, \ P(|X|>M)=[1-F_{X}(M)]+F_{X}(-M)\leq \frac{\eta}{8}$$
> Since $P(|X_{n}-X|>1)\to 0$, then $$\begin{align} \exists N_{1} \text{ big enough,} \ s.t.\forall n\geq N_{1},\ P(|X_{n}|>M+1)&=P(|X_{n}|>M+1,|X|\leq M)+P(|X_{n}|>M+1,|X|> M)\\&\leq P(|X_{n}-X|>1)+P(|X|>M)\leq  \frac{\eta}{4} \end{align} $$
> Therefore $$P(|X|>M+1)\leq \frac{\eta}{4},\ P(|X_{n}|>M+1)\leq \frac{\eta}{4}$$
> $f$ is a continuous map, therefore it is consistently continuous on $[-M-1,M+1]$: $$\forall\varepsilon>0,\ \exists \delta >0,\ s.t.\forall(x,y):|x-y|<\delta,x,y \in [-M-1,M+1],\ |f(x)-f(y)|<\varepsilon   $$therefore, $$\begin{align} P(|f(X_{n})-f(X)|>\varepsilon)&\leq P(|f(X_{n})-f(X)|>\varepsilon,X_{n},X\in[-M-1,M+1])\\&+P(|f(X_{n})-f(X)|>\varepsilon,X_{n} \text{ or }X\in[-M-1,M+1]^{C}) \\&\leq P(|X_{n}-X|>\delta)+P(|X_{n}>M+1)+P(|X|>M+1)\end{align} $$For the $\delta>0$ above, $$\exists N_{2},\ s.t. \forall n\geq N_{2},P(|X_{n}-X|>\delta)\leq \frac{\eta}{2}$$
> Choose $N=\max\left\{ N_{1},N_{2} \right\}$, then $$P(|f(X_{n})-f(X)|>\varepsilon)\leq  \frac{\eta}{2}+\frac{\eta}{4}+\frac{\eta}{4}=\eta$$Q.E.D.

>[!quote] e.g. $\xi _{k}, k\geq_{1}$ are i.i.d., $\xi \sim U[0,1]$, set $$\eta _{n}=\left( \prod _{k=1}^{n}\xi _{k} \right)^{1/n}$$prove: $$\eta _{n}\xrightarrow{ P }c,\ n\to \infty$$
> Note that $$\log \eta _{n}=\frac{1}{n}\sum_{k=1}^{n} \log \xi _{k}\xrightarrow{ P }E\log \xi _{1}=\int_{0}^{1}  \log x\, \text{d}x =1 \ \text{- Khinchine CLT}$$therefore $$\eta _{n}=e^{ \log \eta _{n} }\xrightarrow{ P }e^{-1}$$

> [!NOTE] Comparison between **Convergence** and **Convergence in Probability**
> Convergence: as $n$﻿ grows, $Y_n$﻿ gets closer to $c$﻿ ($c+1 → c+0.5 → c+0.1 → … → c+\epsilon$﻿);  
> Convergence in Probability: as $n$﻿ grows, the probability that $Y_n$﻿ is not so close to $c$﻿ gets lower 
> ($P\{Y_n\text{ is not so close}\} = 0.1 →0.05 →0.01 → …→\epsilon$﻿)$$X_n \overset{P}→ a, Y_n \overset{P} → b, \Rightarrow g(X_n, Y_n) \overset{P} →g(a,b) (n \rightarrow +\infty)$$

#### Markov Inequality
for random variant $Y$﻿, if $\mu_k$﻿ exists, then 
$$\forall \epsilon >0, \ P\{|Y| ≥ \epsilon\} ≤\frac{E(|Y|^k)}{\epsilon^k} \iff P\{|Y|\le \epsilon\}\ge1-\frac{E(|Y|)^k}{\epsilon^k}$$

> [!quote] Proof
>  let $Z = \left \{ \begin{array} {lcr} \epsilon & , |Y|\ge \epsilon \\ 0 & , |Y|<\epsilon \end{array} \right.$﻿, obviously $0≤Z≤|Y|$﻿, 
> then $0≤Z^k≤|Y|^k$﻿, $E(Z^k)≤E(|Y|^k)$﻿ while $E(Z^k) = 0+ \epsilon^k \cdot P\{|Y|≥\epsilon\},$﻿ 
> therefore $P\{|Y| ≥ \epsilon\} ≤\frac{E(|Y|^k)}{\epsilon^k}$﻿.
#### Chebyshev Inequality
for random variant $X$﻿, if $E(X)\equiv\mu, D(X)\equiv\sigma^2$﻿ exists, then
$$\forall \epsilon >0, P\{|X-\mu|\ge \epsilon\}\le\frac{\sigma^2}{\epsilon^2}\iff P\{ |X-\mu|\le \epsilon\}\ge 1-\frac{\sigma^2}{\epsilon^2}.$$
> This inequality gives an important measure of the probability of a random variant getting into or out of the area near its expectation.

**Extension:** If $f$ is a monotonically non-decreasing positive function, then $$P(x>\varepsilon)\leq P(f(X)\geq f(\varepsilon))\leq\frac{Ef(X)}{f(\varepsilon)}$$

#### (Weak) Law of large numbers
Random variant sequence $\{ Y_i, i≥1\}$﻿ obeys law of large numbers, if $\exists$ a constant sequence $\{c_n, n\ge 1\},$ s.t. $$\forall\epsilon>0, \lim_{n\rightarrow +\infty}P\{|\frac{1}{n}\sum^n_{i=1}Y_i-c_n|\ge\epsilon\}=0$$that is
$$\frac{1}{n}\sum^n_{i=1}Y_i -c_n\overset{P}\longrightarrow 0, n\rightarrow+\infty$$
specially, if $c_n = c, n=1,2,...$﻿, then
$$\frac{1}{n}\sum^n_{i=1}Y_i \overset{P}\longrightarrow c, n\rightarrow+\infty$$
#### Bernoulli’s law of large numbers

random variants $X_1, X_2, …, X_n, ...$﻿ are independent and obey $B(1,p)$﻿, then 
$$\frac{1}{n}\sum^n_{i=1} X_i \overset{P}\longrightarrow p.$$
in other words, in an $n$﻿-fold Bernoulli trial, event $A$﻿ with $P(A) = p$﻿ happens $n_A$﻿ times, then 
$$\forall \epsilon >0, |\frac{n_A}{n}|\overset{P}\longrightarrow p.$$
> [!quote] Proof
> $n_A \sim B(n, p),$﻿ then $$E(\frac{n_A}{n})= \frac{1}{n}E(n_A) = p, D(\frac{n_A}{n})=\frac{1}{n^2}D(n_A)=\frac{pq}{n}.$$ 
> from Chebyshev Inequality, 
> $$P\{ |\frac{n_A}{n} -p|\ge \epsilon\} \le \frac{pq}{n\epsilon^2}\rightarrow 0 (n\rightarrow +\infty)$$﻿
> which means 
> $$|\frac{n_A}{n}|\overset{P}\longrightarrow p.$$
#### Khinchine’s law of large numbers
random variants $X_1, X_2, …, X_n, ...$﻿ are **independent** and **identically distributed** with $EX_i =\mu, i=1,2,…$﻿, then $$\frac{1}{n}\sum^{n}_{i=1}X_i\overset{P}\longrightarrow \mu.$$﻿
in other words, for independent and identically distributed $\{ X_i\}$﻿, their arithmetic mean converge to $EX_i$﻿ in probability.

> [!quote] e.g. $\xi_{1},\xi_{2},\dots,$is a set of independent random variables. The distribution of $\xi_{k}$ are as follows: $\xi_{1} \equiv 0;\ k\geq2,$ $$P(\xi_{k}=k)=P(\xi_{k}=-k)=\frac{1}{2k\log k}$$ $$P(\xi_{k}=0)=1- \frac{1}{k\log k}$$ Set $S_{n}=\sum^n_{k=2}\xi_{k}$, prove: $$\frac{S_{n}}{n}\overset{P}\longrightarrow 0$$
> In fact, $E\xi_{k}=0, \ Var(\xi_{k})= \frac{k}{\log k},$
> $$Var(S_{n})=\sum^n_{{k=1}}Var(\xi_{k})=\sum^n_{{k=2}} \frac{k}{\log k}\sim \frac{n^2}{\log n}$$
> $$\frac{Var(S_{n})}{n^2}\sim \frac{1}{\log n}\to 0, \ n\to \infty$$


> [!quote] e.g. $\xi_{1},\xi_{2},\cdots$ is a set of random variables with identical distributions, $E\xi_{k}=\mu,\ Var(\xi_{k}=\sigma^2)<\infty$. $\xi_{k}$ is dependent with $\xi_{k+1},k>1$; if $|k-l|\geq2,\ \xi_{k}$ is independent with $\xi_{k+1}$. Set $S_{n}=\sum^n_{k=1}\xi_{k}$, prove that $$\frac{S_{n}}{n}\overset{P}\longrightarrow \mu$$
> $$Var(S_{n})=\sum^n_{k=1}Var(\xi_{k})+2\sum_{k<l}Cov(\xi_{k},\xi_{l})$$
> $$|Cov(\xi_{k},\xi_{k+1})|\leq(Var(\xi_{k})\cdot Var(\xi_{k+1})^{1/2})\leq \sigma^2$$
> $$Cov(\xi_{k},\xi_{l})=0, |k-l|\geq2.$$
> Therefore, $$\frac{Var(S_{n})}{n^2}\to0,\ n\to \infty.$$

#### Chebyshev’s law of large numbers
random variants $\xi _{k},\ k\geq1$﻿ have a **bounded variance** $E\xi _{k}=\mu _{k}$(n.e. Cauchy distribution), if $$
\frac{Var(S_{n})}{n^{2}}\to 0, \ n\to \infty
$$then $$
\frac{S_{n}}{n} \xrightarrow{ P } \frac{1}{n} \sum_{k=1}^{n} \mu _{k},\ n\to \infty$$
###### Proof
$$
\forall \varepsilon>0, P\left( | \frac{S_{n}}{n}- \frac{\sum^n_{{k=1}}\mu_{k}}{n}|>\varepsilon \right)\leq \frac{DS_{n}}{n^2\varepsilon^2}\to 0
$$
Chebyshev’s law of large numbers has **no requirement for independence**, but it requires that the variance exists.
### Central Limit Theorems (CLT)
A random variable formed by a large number of independent factors approximately obeys **normal distribution**.
#### Poisson’s Central limit theorem
$0<p_{n}<1, S_{n}\sim B(n, p_{n}).$ If $np_{n}\to \lambda, 0<\lambda<1,$ then $\forall k=0,1,2,\dots$
$$
P(S_{n}=k)\to \frac{\lambda^ke^{-\lambda}}{k!},\ n\to \infty.
$$
This leads to the Poisson distribution.
> [!quote] Proof
> $$P(S_{n}=k)= \frac{n!}{k!(n-k)!}p_{n}^k(1-p_{n})^{n-k}$$$$=\frac{1}{k!}\cdot n(n-1)\cdots(n-k+1)\cdot \frac{1}{n^k}\cdot(np_{n})^k\cdot\left( 1- \frac{\lambda}{n}+o\left( \frac{1}{n} \right) \right)^{n-k}\to \frac{\lambda^k}{k!}e^{-\lambda}, \ n\to \infty.$$
#### De Moivre-Laplace Central limit theorem
random variants $X_1, X_2, …, X_n, ...$﻿ are independent and obey $B(1,p)$﻿, then 
$$\sum^n_{i=1}X_i \overset{\cdot}\sim N(np, np(1-p))\iff\bar X =\frac{1}{n}\sum^n_{i=1}X_i \overset{\cdot}\sim N(p, \frac{p(1-p)}{n})$$
in other words, in an $n$﻿-fold Bernoulli trial, event $A$﻿ with $P(A) = p$﻿ happens $n_A$﻿ times, then when $n$﻿ is big enough, $$n_A \overset{\cdot}\sim N(np, np(1-p)).$$﻿
> Extension: $X\sim P(\lambda),$﻿ then $X\overset{\cdot}\sim N(\lambda, \lambda)$﻿.
##### Derivation
(i) $p=\frac{1}{2}$ - De Moivre
(ii) $p \ne \frac{1}{2}$ - Laplace
(iii) basic point:
$$
P\left( a\leq \frac{{S_{n}-np}}{\sqrt{ np(1-p) }}\leq b \right)=\sum_{k:a\leq\frac{{k_{n}-np}}{\sqrt{ np(1-p) }}\leq b}\left( \begin{array} a n \\k\end{array}\right) p^k(1-p)^{n-k}
$$
De Moivre: 
$$
P\left( S_{n}= \frac{n}{2}+k \right)=\frac{1}{2^n}\left( \begin{array} a n \\ \frac{n}{2}+k\end{array}\right), \ \text{if } \frac{n}{2}\in Z
$$
De Moivre with Stirling:
$$
n! = n^ne^{-n}\sqrt{ 2\pi n  }(1+o(1))
$$
$$
n!= \sqrt{ 2\pi n }n^n e^{-n}e^{r_{n}}, \ \frac{1}{12n+1}<r_{n}\leq \frac{1}{12n} \text{ -- Robbins(1955)}
$$
$$
\frac{1}{2^n}\left( \begin{array} c n \\ \frac{n}{2}+k\end{array}\right) \approx \frac{2}{\sqrt{ 2\pi n }}e^{- 2k^2/n}, \ \ \frac{1}{2^n}\left( \begin{array} a n \\ \frac{n}{2} \end{array}\right)\approx \frac{2}{\sqrt{ 2\pi n }}
$$
$$
P\left( a\leq S_{n}- \frac{n}{2}\leq b \right)=\sum_{{a\leq k\leq b}}P\left( S_{n}= \frac{n}{2}+k \right)\asymp \sum_{{a\leq k\leq b}} \frac{2}{\sqrt{ 2\pi n }}e^{- 2k^2/n}\asymp \frac{2}{\sqrt{ 2\pi }}\int^{\frac{b}{\sqrt{n}}}_{\frac{a}{\sqrt{ n }}}e^{-2y^2}\text{d}y
$$
An important influence of De Moivre-Laplace’s central limit theorem is that it introduced the concept of "*Convergence in Distribution*".
#### Convergence in Distribution - III
$(\Omega, \Sigma, P)$ is the probability space, $X, X_{n}, n\geq 1$ is a set of random variables, $F, F_{n}, n\geq1$ are their respective distribution functions. If for any **continuous point** $x$ of $F$,
$$
F_{n}(x)\to F(x), \  n\to \infty
$$
Then we say that $F_{n}$ is converged in distribution to $F$, also $X_{n}$ is converged in distribution to $X$, written as
$$
F_{n}\overset{d}\longrightarrow F, \ \ X_{n}\overset{d}\longrightarrow X.
$$
Therefore, the De Moivre-Laplace's CLM can be written as$$\frac{{S_{n}-np}}{\sqrt{ np(1-p) }} \overset{d}\longrightarrow N(0,1)$$
##### Note
(i) If $F$ is continuous in $\mathbb{R}$, then $F_{n}$ converges to $F$ everywhere.
(ii) Generally, $F$ is not a continuous function (right continuous, left limit exists)
(iii) Now that $F$ is monotone and bounded, there are at best a countable number of sets of discontinuous points$$D_{F}=\left\{ x: F(x)-F(x-)>0 \right\} =\bigcup_{n=1}^{\infty}\left\{ x:F(x)-F(x-)\geq \frac{1}{n} \right\} $$
(iv) The sets of continuous points of $F$ are dense on $\mathbb{R}$

> [!quote] e.g. $X_{n}\equiv \frac{1}{n}, X\equiv 0$
> $$F_{n}(x)=\left\{ \begin{align}& 1 & ,x\geq  \frac{1}{n} \\ &0 &, x< \frac{1}{n} \end{align} \right. , \ F(x)=\left\{ \begin{aligned}& 1 & ,x\geq 0 \\ &0 &, x<0\end{aligned} \right.$$
> Therefore, $F_{n}$ does not converge to $F$ everywhere, but does converge to $F$ except 0 point.

**Convergence in Probability → Convergence in Distribution**
$$
X_{n}\xrightarrow{ P }X \implies X_{n}\xrightarrow{ d }X
$$

> [!quote] Proof:
> $$\forall X\in \mathbb{R}, \varepsilon>0, P(X_{n}\leq x)=P(X_{n}\leq x, X_{n}-X\geq -\varepsilon)+P(X_{n}\leq x, X_{n}-X<-\varepsilon)$$
> where $$P(X_{n}\leq x, X_{n}-X<-\varepsilon)\leq P(X_{n}-X<-\varepsilon)\to 0$$
> $$\lim_{ n \to \infty } \sup P(X_{n}\leq x)\leq P(X\leq x+\varepsilon) \to P(X\leq x), \varepsilon\to 0$$
> $$\lim_{ n \to \infty } \inf P(X_{n}\leq x)\geq P(X\leq x-\varepsilon) \to P(X < x), \varepsilon\to 0$$
> If $x$ is a continuous point of $F$, then let $\varepsilon\to 0$, we have $$\lim_{ n \to \infty } \inf P(X_{n}\leq x)=P(X\leq x).$$Q.E.D.

**The inverse does not hold.**

> [!quote] n.e. $Y$ is a non-degenerative symmetric random variant, set $X_{n}=Y,\ n\geq1, X=-Y.$
> Apparently we have $X_{n}\xrightarrow{ d }X$, but $$P(|X_{n}-X|>\varepsilon)=P(2|Y|>\varepsilon)$$therefore we do not have convergence in probability.

**However, it holds if the variant converges to a constant.**
$$
X_{n}\xrightarrow{ d }c\iff X_{n} \xrightarrow{ P }c
$$
> [!quote] Proof
> $$P(X_{n}\leq c+\varepsilon)\to1 \implies P(X_{n}>c+\varepsilon)\to 0, \ n \to \infty$$$$P(X_{n}\leq  c-\varepsilon)\to 0 \implies P(X_{n}<c-\varepsilon)\to 0, \ n \to \infty$$$$\implies P(|X_{n}-c|>\varepsilon)\to 0 \implies X_{n}\xrightarrow{ P }c.$$
> 

##### Judgement Formula: Levy's Continuity Theorem
$X,X_{n},\ n\geq 1$ are a set of random variants with eigenfunctions $\phi,\phi _{n},\ n\geq1$, then $$X_{n}\xrightarrow{ d }X \iff \phi _{n}(t)\to \phi(t),\ t \in \mathbb{R}$$
**Another form of Levy's Continuity Theorem:**
$X_{n},\ n\geq 1$ are a set of random variants with eigenfunctions $\phi _{n},\ n\geq 1$, if $$\phi _{n}(t)\to \phi(t), \ t\in \mathbb{R}$$and $\phi$ is continuous at 0, then $\phi$ is an eigenfunction, set its correspondent random variant as $X$, then $$X_{n} \xrightarrow{ d }X.$$
> [!note] The Origin of the Name "Central Limit Theorem"
> In the beginning of 20th century, most probabilists call this theorem as "Limit Theorem". Due to such important central position this theorem is at in the probability theory, mathematician G. Polya put "Central" before the theorem in 1920. Since then, people have been calling this as CLT.
##### Application of Levy's Continuity Theorem
###### 1. Proof of Khinchine's Law of Large Numbers
$\xi _{k},\,k\geq_{1}$ are iid., $E\xi _{k}=\mu$, then
$$
\frac{1}{n}\sum_{k=1}^{n} \xi _{k}\xrightarrow{ P }\mu
$$

> [!quote] Proof
> To prove that we show 
> $$X_{n}=: \frac{1}{n}\sum_{k=1}^{n} \xi _{k}\xrightarrow{ d }\mu \iff \phi _{n}(t)=: Ee^{ itX_{n}\to e^{ it\mu } }$$
> $$\phi _{n}(t)=Ee^{ itX_{n} }=[Ee^{ i\frac{t}n \xi _{1} }]^{n}$$
> Do Macraulin Expansion:
> $$Ee^{ i \frac tn \xi _{1}} =1+ \frac{it\mu}{n}+ o\left( \frac{1}{n} \right),\,n\to \infty $$
> Therefore, for $\forall t \in \mathbb{R}$,
> $$\phi _{n}(t)=\left[ 1+ \frac{it\mu}{n}+ o\left( \frac{1}{n} \right) \right] ^{n}\to e^{ it\mu }$$ 
###### 2. Proof of Levy-Feller CLT
$\xi _{k},\,k\geq_{1}$ are iid., $E\xi _{k}=\mu,Var(\xi _{k}=\sigma^{2})$, then
$$
X_{n}= \frac{1}{\sigma \sqrt{ n }}\sum_{k=1}^{n} (\xi _{k}-\mu) \xrightarrow{ d } N(0,1)
$$

> [!quote] Proof
> To prove that we show
> $$\phi _{n}(t)=Ee^{ itX_{n} }\to  e^{ - t^{2}/2 }$$
> Note that
> $$Ee^{ itX_{n} }=\left[ Ee^{ i \frac{t(\xi _{k}-\mu)}{\sigma \sqrt{ n }} } \right] ^{n}$$
> Do Macraulin Expansion:
> $$Ee^{ i \frac{t(\xi _{k}-\mu)}{\sigma \sqrt{ n }} }=1 - \frac{t^{2}}{2n}+o\left( \frac{1}{n} \right)$$
> Therefore, $\forall t$,
> $$Ee^{ itX_{n} }=\left[ 1 - \frac{t^{2}}{2n}+o\left( \frac{1}{n} \right) \right]^{n}\to e^{ - t^{2}/2 } $$

##### Algorithmic Properties
###### 1. Linear algorithm
(i) If $X_{n} \xrightarrow{ d }X,\,b_{n}\to b$, then 
$$X_{n}+b_{n}\xrightarrow{ d }X+b$$
> [!quote] Proof
> Given that $X_{n}\xrightarrow{ d }X$, then
> $$Ee^{ itX_{n} }\to  Ee^{ itX }$$
> Therefore
> $$Ee^{ it(X_{n}+b_{n}) }=Ee^{ itX_{n} }e^{ itb_{n} }\to Ee^{ itX }e^{ itb }=Ee^{ it(X+b) }$$
>

(ii) If $X_{n} \xrightarrow{ d }X,\,a_{n}\to a$, then
$$a_{n}X_{n}\to  aX$$

> [!quote] Proof
> If $a>0$, then $\forall \varepsilon>0, \exists N,\forall n>N,$
> $$\frac{a}{1+\varepsilon}<a_{n}< \frac{a}{1-\varepsilon}$$
> $$P(a_{n}X_{n}\leq x)\leq P\left( X_{n}\leq  \frac{(1+\varepsilon)x}{a} \right)\to P\left( X\leq \frac{(1+\varepsilon)x}{a} \right)=P(aX\leq (1+\varepsilon)x)$$
> Similarly, 
> $$P(a_{n}X_{n}\leq x)\geq P\left( X_{n}\leq  \frac{(1-\varepsilon)x}{a} \right)\to P\left( X\leq  \frac{(1-\varepsilon)x}{a} \right)=P(aX\leq (1-\varepsilon)x)$$
> Therefore, if $x$ is a continuous point of $aX$, we have
> $$P(a_{n}X_{n}\leq x)\to P(aX\leq x),\,n\to \infty$$
> If $a>0$, the process is the same.
> If $a=0$, then $\forall\varepsilon,\eta>0$, if $n$ is big enough, we have $|a_{n}|< \frac{\varepsilon}{\eta}$. Set $\eta$ that $\pm \frac{1}{\eta}$ is a continuous point of $X$, then
> $$P(|a_{n}X_{n}|>\varepsilon)=P\left( |X_{n}|> \frac{1}{\eta} \right)\to P\left( |X|> \frac{1}{\eta} \right),\,n\to \infty$$
> Set $\eta\to0$, then
> $$P(|a_{n}X_{n}|>\varepsilon)\to 0$$

(iii) If $X_{n}\xrightarrow{ d }X,\,a_{n}\to a,\,b_{n}\to b$, then
$$a_{n}X_{n}+b_{n}\xrightarrow{ d }aX+b$$
###### 2. Multiplication
If $X_{n}\xrightarrow{ d }X,\,Y_{n}\xrightarrow{ P }c$, then
$$Y_{n}\cdot X_{n}\xrightarrow{ d }cX$$
###### 3. Continuous map remains convergence in distribution
if $f: \mathbb{R} \mapsto \mathbb{R}$ is a continuous map, $X_{n}\xrightarrow{ d }X$, then
$$f(X_{n})\xrightarrow{ d }f(X)$$

> [!quote] Proof
> > **Helly Theorem**
> > If $F,F_{n},n\geq1$ is a set of distribution function, and $F_{n}\xrightarrow{ d }F$, then for any bounded continuous function $g$,
> > $$\int g(x) \text{d}F_{n}(x) \to  \int g(x) \text{d}F(x)  $$
> 
> Therefore, $\forall t \in \mathbb{R}$,
> $$Ee^{ itf(X_{n}) }=\int e^{ itf(x) } \text{d}F_{n}(x) \to \int e^{ itf(x) }\text{d}F(x)=Ee^{ itf(X) }$$
> So the conclusion holds.

> [!quote] e.g. If $\xi _{k},\,k\geq_{1}$ is a set of iid. random variants, $P(\xi _{k}=\pm1)= \frac{1}{2}$, define $$U_{n}= \sum_{k=1}^{n} \frac{\xi _{k}}{2^{k}}$$prove that $$U_{n}\to U, \,U\sim U(-1,1)$$
> $$\phi _{n}(t)=Ee^{ itU_{n} }= \prod_{k=1}^{n} Ee^{ it \frac{\xi _{k}}{2^{k}} }=\prod_{k=1}^{n} \left[ \frac{1}{2}(e^{  it/2^{k} }+e^{ -it/e^{k} }) \right]=\prod_{k=1}^{n} \cos \frac{t}{2^{k}}=\frac{\prod_{k=1}^{n} \cos \frac{t}{2^{k}}\sin \frac{t}{2^{n}}}{\sin \frac{t}{2^{n}}}=\frac{{\sin t}}{2^{n}\sin \frac{t}{2^{n}}}\to \frac{{\sin t}}{t}$$
> $$\phi(t)=Ee^{ itU }=\frac{1}{2}\int_{-1}^{1} e^{ itx } \, \text{d}x=\frac{{\sin t}}{t} $$
> Therefore 
> $$\phi _{n}(t)\to \phi(t),\,U_{n}\xrightarrow{ d }U.$$
#### Generalisation of De Moivre-Laplace CLT
##### 1: Levy-Lindeberg’s Central Limit Theorem
random variants $X_1, X_2, …, X_n, ...$﻿ are independent and **identically distributed** with 
$$EX_i =\mu,DX_i=\sigma^2, i=1,2,…$$
then
$$\sum^n_{i=1}X_i \xrightarrow{ d } N(n\mu, n\sigma^2)\iff\bar X=\frac{1}{n}\sum^n_{i=1}X_i \xrightarrow{ d } N(\mu, \frac{\sigma^2}{n})$$
##### 2: Lyapunov's Central Limit Theorem
random variants $\xi _{k},\ k\geq 1$ are a series of independent (**not necessarily identically distributed**) random variants with $E\xi _{k}=\mu _{k},\ Var(\xi _{k})=\sigma _{k}^{2}$. Set $S_{n}=\sum_{k=1}^{n}\xi _{k},\ B_{n}=\sum_{k=1}^{n}\sigma _{k}^{2}$, if
(i) $B_{n}\to \infty$
(ii) $E|X_{k}|^{3}<\infty, $, and $$
 \frac{{\sum_{k=1}^{n} E|X_{k}|^{3}}}{B_{n}^{3/2}}\to0,\ n\to \infty
$$then 

$$
\forall x,\ P\left( \frac{{\sum_{k=1}^{n} (\xi _{k}-\mu _{k})}}{\sqrt{ B_{n} }}\leq x \right)\to \Phi(x) \iff \sum_{k=1}^{n} \xi _{k}\xrightarrow{ d }N\left( \sum_{k=1}^{n} \mu _{k},\sum_{k=1}^{n} B_{n} \right)
$$

> [!quote]  **e.g.1 Randomly choose** $48$ **real numbers from** $(0, 10)$, **solve the probability that the sum of the numbers no greater than** $260$.
> Let the numbers be $X_1, …, X_{48}, X=X_1+X_2+…+X_{48}.$ 
> $X_i \sim U(0, 10)$ are independent, $E(X_i) = 5, D(X_i) =\frac{(10-0)^2}{12}$. 
> then $E(X) = 48\times 5 = 240, D(X) = 48 \times \frac{(10-0)^2}{12}=400$. 
> From _CLT_, $X\overset{\cdot}\sim N(240, 400)$, 
> then $P\{X\le 260\} = \Phi(\frac{240-260}{20}) =\Phi(1) = 0.8413$.

> [!quote]  By using CLT, we actually use a continuous distribution to approximate a discrete distribution, therefore sometimes problems emerge: **e.g.2 A factory has 400 identical machines operating independently with the breaking down probability 0.02, solve the probability that at least 2 machines break down.**
> Let the number of machines breaking down be $X$, then $X\sim B(400, 0.02)$. 
> Method 1: Poisson distribution $\lambda = np = 8,$ then $X\sim P(8)$, $P\{ X≥2\} = 1-P(X=1)-P(X=0)= 1-\frac{e^{-\lambda}\lambda^1}{1!}-\frac{e^{-\lambda}\lambda^0}{0!}\approx 0.9969$. 
> Method 2: CLT $np=8, np(1-p) = 7.84$, from _CLT_, $X\overset{\cdot} \sim N(8, 7.84)$. 
> (i) Discrete $X$: $P(X≥2)= 1-P(X≤1) = 1- \Phi(\frac{1-8}{\sqrt{7.84}}) =0.9938$. 
> (ii) Continuous $N$: $P(X≥2)=1-P(X<2) = 1-\Phi(\frac{2-8}{\sqrt{7.84}}) =0.9838$. 
> Both answers are considered correct.
### Almost sure convergence (Almost everywhere)
**Convergence everywhere**
$X,X_{n},n\geq 1$ is a set of random variants, if $\forall \omega \in \Omega$,
$$X_{n}(\omega)\to X(\omega),\,n\to \infty$$
then call $X_{n}$ converges to $X$ everywhere.
**Convergence almost everywhere**
$X,X_{n},n\geq 1$ is a set of random variants, if $\exists\Omega _{0}$ s.t.
(i) $P(\Omega_{0})=0$
(ii) $\forall \omega \in \Omega \setminus \Omega_{0}$,
$$X_{n}(\omega)\to X(\omega),\,n\to \infty$$
then call $X_{n}$ converges to $X$ almost everywhere, denoted as
$$X_{n}\to X,a.s.$$
That is, excluding a zero-probability event, $X_{n}$ converges to $X$ everywhere.
##### Judgement Formula for Almost sure convergence
$$X_{n}\to X,a.s.$$
$$\begin{aligned}& \iff \forall\varepsilon>0, \,\exists N,\,\forall n>N,\,|X_{n}(\omega)-X(\omega)|<\varepsilon \\ &\iff P\left( \bigcap_{ \varepsilon >0 } ^{\infty} \bigcup_{ N=1 } ^{\infty} \bigcap_{ n = N } ^{\infty} \left\{ \left| X_{n}(\omega)-X(\omega) \right| >\varepsilon \right\}  \right)=1\\ & \iff \forall\varepsilon>0,  P\left( \bigcap_{ N = 1 } ^{\infty} \bigcup_{ n = N } ^{\infty} \left\{ \left| X_{n}(\omega)-X(\omega) \right| >\varepsilon \right\}  \right) =0 \\& \iff P\left( \left\{ \left| X_{n}(\omega)-X(\omega) \right| >\varepsilon \right\} ,i.o. \right) =0\\ & \iff \forall\varepsilon>0, \lim_{ N \to \infty } P\left( \bigcup_{ n = N } ^{\infty} \left\{ \left| X_{n}(\omega )-X(\omega) \right| >\varepsilon \right\}  \right)=0 \end{aligned}$$

> [!NOTE] $i.o.$
> = infinitely often. = $\exists N,\,\forall n>N$
> $$(A_{n},i.o.)\equiv \bigcap_{ N \geq  1 } \bigcup_{ n = 1 } ^{N}A_{n} $$


Therefore, convergence almost everywhere is stronger than convergence in probability.
##### Borel-Cantelli Lemma
(1) If $A_{n},\,n\geq1$ is a set of events, if
$$\sum_{n=1}^{\infty} P(A_{n})<\infty$$
then $$P(A_{n},i.o.)=0.$$
> [!quote] Proof
> $$P(A_{n},i.o.)=\lim_{ N \to \infty } P\left( \bigcup_{ n = N } ^{\infty}  A_{n}\right) \leq \lim_{ N \to \infty } \sum_{n=N}^{\infty} P(A_{n})\to 0$$

(2) If $A_{n},\,n\geq 1$ is a set of independent events, if
$$\sum_{n=1}^{\infty} P(A_{n})=\infty$$
then
$$P(A_{n},i.o.)=1$$

> [!quote] Proof
> Since $A_{n},\,n\geq1$ is a set of independent events, then
> $$P\left( \bigcap_{ n = N } ^{M} A_{n}^{c} \right)=\prod_{n=N}^{M} P(A_{n}^{c})=\prod_{n=N}^{M} (1-P(A_{n}))\leq \prod_{n=N}^{M} e^{ -P(A_{n}) }=e^{ -\sum_{n=N}^{M} P(A_{n}) }$$
> therefore
> $$\lim_{ N \to \infty } \lim_{ M \to \infty } P\left( \bigcap_{ n = N } ^{M} A_{n}^{c} \right)= \lim_{ N \to \infty } \lim_{ M \to \infty }  e^{ -\sum_{n=N}^{M} P(A_{n}) }=0$$

Borel-Cantelli Lemma is also sometimes called the *Borel-Cantelli 0-1 Law*.
##### Borel's Law of Large Numbers
The generalisation of Bernoulli's law of large numbers.
$\xi _{k},\,k\geq1$ is a set of iid. random variants, $\xi _{k}\sim B(1,p)$. Set 
$$S_{n}=\sum_{k=1}^{n} \xi _{k}$$
then
$$\frac{S_{n}}{n}\to  p, \quad  a.s.$$

> [!quote] Proof
> We need to prove that
> $$\forall \varepsilon>0, P\left( \left| \frac{S_{n}}{n}-p \right| >\varepsilon, \quad i.o.  \right)=0$$
> From the Borel-Cantelli Lemma, we just need to prove that
> $$\sum_{n=1}^{\infty} P\left( \left|  \frac{S_{n}}{n}-p \right|>\varepsilon  \right)<\infty $$
> From Markov Inequality,
> $$P\left( \left|  \frac{S_{n}}{n}-p \right| >\varepsilon \right) \leq \frac{{E\left| S_{n}-np \right| ^{4}}}{n^{4}\varepsilon^{4}}$$
> this easily gives
> $$E\left| S_{n}-np \right| ^{4}=np(1-p)[p^{3}+(1-p)^{3}]+n(n-1)p^{2}(1-p)^{2}$$
> $$\sum_{n=1}^{\infty} P\left( \left| \frac{S_{n}}{n}-p \right| >\varepsilon \right)\leq K(\varepsilon,p)\sum_{n=1}^{\infty} \frac{1}{n^{2}}<\infty  $$
##### Kolmogorov's Strong Law of Large Numbers
$\xi _{k},\,k\geq 1$ is a set of **iid. random variants**. If $E\xi _{k}=\mu$, then
$$\frac{S_{n}}{n}\to  \mu,\,a.s.$$
Kolmogorov's Strong Law of Large Numbers generalises the Borel's Strong Law of Large Numbers and Khinchine's Law of Large Numbers.

																																																																																															   