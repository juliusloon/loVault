---
title: Chapter-8-Hypothesis-test
tags:
  - PMS
date: 2026-01-31 00:00:09
---

### Hypothesis $H$
**Null hypothesis** $H_0$
**Alternative hypothesis** $H_1$
usually the hypothesis that we want get support by the sample data
### Test statistic
$T = T(X_1, X_2,…,X_n)$ is a statistic to test whether $H_0$ holds.
**Rejection region** $W$
The range of $T$ that rejects $H_0$
$W =| \bar X -\mu_0| ≥ C$.
**Acceptance region** $\bar W$
### Two types of error
**Type Ⅰ error 弃真**
rejects a true $H_0$.
$\alpha(C) \equiv P\{\text{rejects }H_0|H_0 \text{ is true}\} = P_{\mu = \mu_0}\{|\bar X -\mu _0|\ge C\}= p_1.$
$\Rightarrow p_1 = \alpha(C)= 2 -2\Phi(\frac{C}{\frac{\sigma}{\sqrt{n}}})$
**Type Ⅱ error 存伪**
accepts a false $H_0$.
$\beta(C) \equiv P\{\text{accepts }H_0|H_0 \text{ is false}\} =P_{\mu \ne \mu_0}\{|\bar X -\mu _0| < C\}= p_2.$
$\Rightarrow p_2 = \beta(C) =\Phi(\frac{\mu_0 +C -\mu}{\frac{\sigma}{\sqrt{n}}})-\Phi(\frac{\mu_0 -C -\mu}{\frac{\sigma}{\sqrt{n}}})$
For $n$ given, $\alpha(C)$ is a monotone decrease function of $C$, while $\beta(C)$ is a monotone increase function of $C$.
Therefore, it is impossible to find a limit $C$ for both $\alpha(C), \beta(C)$ to be small, as they restrict each other.
### Neyman-Pearson Lemma
Control such that $p_1$ is no bigger than a relatively small constant $\alpha(0<\alpha<1)$, then find a hypothesis where $p_2$ is as small as possible.
Here the constant $\alpha$ is called the **significance level**, usually 0.01, 0.05, 0.10, etc.
Continue our discussion, take significance as $\alpha$, then $p_1 = 2 -2\Phi(\frac{C}{\frac{\sigma}{\sqrt{n}}})≤\alpha, \Phi(\frac{C}{\frac{\sigma}{\sqrt{n}}})\ge 1 - \frac{\alpha}{2}, \frac{C}{\frac{\sigma}{\sqrt{n}}}\ge z_\frac{\alpha}{2}, C\ge z_\frac{\alpha}{2}\cdot \frac{\sigma}{\sqrt{n}}.$  
From Neyman-Pearson lemma, we take  
$C = z_\frac{\alpha}{2}\cdot \frac{\sigma}{\sqrt{n}}$ to get the smallest $p_2$.
Therefore, the rejection region $W=\{ | \bar X -\mu_0| ≥ C \}= \{| \bar X -\mu_0| ≥z_\frac{\alpha}{2}\cdot \frac{\sigma}{\sqrt{n}} \}= \{|\frac{\bar X -\mu}{\frac{\sigma}{\sqrt{n}}}|\ge z_\frac{\alpha}{2}\}$, usually written for short as $|Z| \ge z_\frac{\alpha}{2}$, which means if samples are in the rejection region(which is $|Z| ≥ z_\frac{\alpha}{2}$), then we have a certainty of $\alpha$ to reject $H_0$.
![](Image1.png)
### Types of hypothesis
**Two-sided hypothesis**
$H_0: \theta =\theta_0; H_1: \theta \ne \theta_0;$
**Left-sided hypothesis**
hypothesise that the parameter is bigger than some given value, which is the null hypothesis $H_0$., therefore the reject region is on the left
$H_0: \theta ≥ \theta_0, H_1: \theta < \theta_0;$
\#Another form: $H_0: \theta = \theta_0, H_1: \theta < \theta_0$, only different for calculation of $p_1$.

> **Determination of rejection region of Left-sided hypothesis**
> 
> $H_0: \mu≥\mu_0, H_1: \mu<\mu_0, \mu_0$ known
> 
> take $\bar X$ as reference of $\mu$. Even if $H_0$ holds, because of the random volatility of samples, “ $\bar X < \mu_0$” might still happen.
> 
> However, if $\bar X -\mu_0<k$, which means the difference between $\bar X$ and $\mu_0$ has reached a non-negligible value, we see $H_0$ as false.
> 
> Since there also exists $\bar X -\mu_0$, we still let the test statistic be $Z = \frac{\bar X -\mu_0}{\sigma / \sqrt{n}}$, then we can get $(W = )Z =\frac{\bar X -\mu_0}{\sigma / \sqrt{n}} ≤ C$.
> 
> $p_1 = \alpha(\mu, C) = P_{\mu ≥ \mu_0}\{ \frac{\bar X -\mu_0}{\sigma / \sqrt{n}}≤C\}= \Phi_{\mu>\mu_0}(C+\frac{\mu_0 - \mu}{\sigma / \sqrt{n}})\overset{\mu\ge \mu_0}\le \Phi_{\mu\ge \mu_0}(C)\triangleq \alpha,$ which is $\sup_{\mu≥\mu_0} \alpha(\mu, C) = \alpha(\mu_0, C) = \Phi(C) \triangleq \alpha$.
> 
> $\Rightarrow C = -z_\alpha$, therefore the rejection region of left-sided test is $Z = \frac{\bar X -\mu_0}{\sigma / \sqrt{n}}\le -z_\alpha$.
> 
> ![](Image2.png)

**Right-sided hypothesis**
hypothesise that the parameter is smaller than some given value, which is the null hypothesis $H_0$, therefore the rejection region is on the right
$H 0: \theta \le \theta_0, H_1: \theta> \theta_0.$
\#Another form: $H_0: \theta = \theta_0, H_1: \theta > \theta_0$, only different for calculation of $p_1$.

> Similarly, the rejection region of right-sided test is $Z ≥ z_\alpha$.
> 
> ![](Image3.png)
  
### $P_-$: probability of extremer values
The probability of test statistic having more extreme values than observed, when $H_0$ holds.
Take $W: |Z| \ge z_\frac{\alpha}{2}$ as reference, replace $z_\frac{\alpha}{2}$ with $|z_0|=|\frac{\bar x -\mu_0}{\sigma / \sqrt{n}}|,$ then $P_- = P_{H_0}(|Z|\ge |z_0|) = 2-2\Phi(|z_0|).$
The smaller $P_-$ is, the smaller the probability of the observed value occurs is, the stronger the reason for rejecting $H_0$ is. Given the significance level of a hypothesis test $\alpha$, if $P_- ≤ \alpha$, then we reject the null hypothesis, and call the test result is **statistically significant** under $\alpha$, otherwise we call it **significantly insignificant**.

> From the graph, the region on the right of $\alpha$ means the rejection region, which means if sample value falls in this region, the the probability of type Ⅰ error is bigger than $\alpha$, then we reject $H_0$. $P_-≤\alpha$, then $P_-$’s probability region is smaller than $\alpha$’s, which means some of the test statistic values that are not so extreme fall into the rejection region. Therefore, we reject $H_0$.
> ![](Image4.png)

**Calculation of** $P_-$ **of one-sided test**
**left-sided test:** $W: Z≤ -z_\alpha$, then solve $z_0 = \frac{\bar x -\mu_0}{\sigma / \sqrt{n}},$ then $P_- = \sup_{\mu>\mu_0}P_{H_0}\{Z≤z_0\} = P_{\mu=\mu_0}\{Z≤z_0\} = \Phi(z_0)$.
similarly, for **right-sided test**, $P_- = 1-\Phi(z_0)$. (the probability that test statistic is bigger than sample statistic value)
### Basic steps to handle with Hypothesis test problems
(1) Come up with $H_0$ and $H_1$
Note the inequivalence between $H_0$ and $H_1$. $H_0$ is being “protected”, as the smaller $\alpha$ is, the smaller the probability to mistake true $H_0$ as false is.
If there is a more serious error to avoid, let the more serious one be type Ⅰ error.
e.g. When judging whether a drug is real, there are two types of errors: mistake a fake drug as real, and mistake a real drug as fake, where the former causes life risks, while the latter causes financial loss. Therefore, let the former be type Ⅰ, which is let $H_0$ be “the drug is real”.
If not, take $H_0$ as maintain the status quo.
If we reject $H_0$, it means that even the status quo is protected, we still have good reason to take novel techniques.
Generally, we take $H_1$ as the situation we want to get support, which means to reject $H_0$.

(2) Choose a test statistic(same method as that of pivot [[Interval estimation]]), and draft the density function

————**Significance test**————
(3) According to the “When $H_0$ holds, the probability of rejecting $H_0$ is no bigger than the significance level $\alpha$” principle, draw the quantile graph of the statistic distribution, and determine the rejection region $W$
Left-sided test: save $\alpha$ on the left;
Right-sided test: save $\alpha$ on the right;
Two-sided test: save $\frac{\alpha}{2}$ on each side.
(4) Incorporate the data(samples and quantile from tables) into the formula

—————— **$P_-$ test**———————
(3) Determine the rejection region(same as above (3) ), calculate the observed value of test statistic and $P_-$ value
(4) Compare $P_-$ with $\alpha$
If $P_- < \alpha$, we reject $H_0$.

> [!important]  **e.g.1 The lifespan of a component $X(h)$ obeys normal distribution $N(\mu, \sigma^2), \mu, \sigma^2$ unknown. 16 samples are as follows: 159 280 101 212 224 379 179 264 222 362 168 250 149 260 485 170 Can we assume that the average life of the component is greater than 225 h?**
> $H_0: \mu_ \le \mu_0=225, H_1: \mu>\mu_0=225$ let $t = \frac{\bar X - \mu}{S / \sqrt{n}} \sim t(n-1)$, then the rejection region of $H_0$ is $t > t_\alpha(n-1).$ $n =16, t_{0.05}(15) = 1.7531, \bar x =241.5, s = 98.7259$ solve and we get $t_0 = \frac{\bar x - \mu}{S /\sqrt{n}} = 0.6685<t_{0.05}(15) = 1.7531$, therefore $t$ does not fall in the rejection region, so we cannot reject $H_0$, which means we cannot assume the average life excesses 255h.
> 
> Note: $P_-$ test: $P_- = P_{H_0} \{t ≥t_0\} = P\{t(15) ≥ 0.6685\} = 0.257>\alpha =0.05$, therefore we cannot reject $H_0$.

> [!important]  **e.g.2 The average life of a component shall be no shorter than 1000 h, now randomly chosen 25 pieces shows an average life of 980 h and standard variation 100 h. Given that the life obeys normal distribution, try to determine whether these components are qualified or not at the significance level of 0.05.**
> Method 1: $H_0: \mu ≤ \mu_0 = 1000, H_1: \mu>\mu_0 = 1000$ let $t = \frac{\bar X -\mu}{S / \sqrt{n}} \sim t(n-1),$ then the rejection region of $H_0$ is $t ≥ t_\alpha(n-1)$. $n =25, t_{0.05}(24) = 1.7109, \bar x = 980, s = 100,$ solve and we get $t_0 =-1< t_{0.05}(24) = 1.7109$, therefore we accept $H_0$, the average life is shorter than 1000 h.
> 
> Note: $P_-$ test: $P_- = P_{H_0}\{ t≥t_0\} = P\{ t(24)≥ -1\} = 1 - P\{t(24)>1\} = 0.84>\alpha = 0.05$, therefore we accept $H_0$.
> 
> Method 2: $H_0: \mu ≥ \mu_0 = 1000, H_1: \mu < \mu_0 = 1000$ let $t = \frac{\bar X -\mu}{S / \sqrt{n}} \sim t(n-1),$ then the rejection region of $H_0$ is $t \le -t_\alpha(n-1)$. then $t_0 = -1 > -t_{0.05}(24) = -1.7109,$ therefore we accept $H_0$, the average life is greater than 1000 h.


> These two “contradictory” results confirmed the “inequivalence” between $H_0$ and $H_1$.

### Hypothesis test of $\sigma^2$ of single normal population
$H_0: \sigma^2=\sigma_0^2,H_1:\sigma^2 \ne \sigma^2_0, \mu$ unknown
take test statistic: $\chi^2 = \frac{(n-1)S^2}{\sigma_0^2}$, then the rejection region of $H_0$ is $\frac{(n-1)S^2}{\sigma_0^2} ≤ \chi^2_{1-\frac\alpha2}(n-1)$ or $\frac{(n-1)S^2}{\sigma_0^2} ≥ \chi^2_{\frac\alpha2}(n-1)$
this method is called the $\chi^2$ test.
$\chi^2_0 = \frac{(n-1)s^2}{\sigma_0^2}, p_0 = P\{\chi^2(n-1)≥\chi^2_0\}$, then the $P_-$ value of the unsymmetric distribution is defined as
$P_- \approx 2 \min\{ P[\chi^2(n-1)≤\chi^2_0],P[\chi^2(n-1)≥\chi^2_0]\}=2\min \{1-p_0, p_0\}$ to make it appropriate for comparison with $\alpha$.
### Hypothesis test of two distributions
$H_0: \sigma_1^2 = \sigma_2^2, H_1: \sigma_1^2 \ne \sigma_2^2 ,\mu_1, \mu_2$ unknown
take test statistic: $F= \frac {S_1^2} {S_2^2}$, then the rejection region of $H_0$ is $\frac{S_1^2}{S_2^2} ≤ F_{1-\frac{\alpha}{2}}(n_1-1, n_2-1)$ or $\frac{S_1^2}{S_2^2} ≥ F_{\frac{\alpha}{2}}(n_1-1, n_2-1)$
this method is called the $F$ test.
$f_0 = \frac{s^2_1}{s_2^2}, p_0= P\{F(n_1-1,n_2-1)\ge f_0\},$ then $P_- = 2\min \{ P[F(n_1-1,n_2-1)≤f_0], P[F(n_1-1,n_2-1)≥ f_0]\} =2 \min\{p_0, 1-p_0\}.$


> [!important]  **e.g. 3 Select $n_1, n_2$ samples with $\bar x, s_1, \bar y, s_2$ calculated from two independent population $N(\mu_1,\sigma^2_1), N(\mu_2, \sigma_2^2)$. Under level $\alpha$, test $H_0: \sigma_1 =2\sigma_2, H_1: \sigma_1 \ne \sigma_2$.**
> $$ \frac{\frac{\frac{(n_1-1)S_1^2}{\sigma_1^2}}{n_1-1}}{\frac{\frac{(n_2-1)S_2^2}{\sigma^2_2}}{n_2-1}} = \frac{\frac{\frac{(n_1-1)S_1^2}{\sigma_1^2}}{n_1-1}}{\frac{\frac{(n_2-1)(2S_2)^2}{(2\sigma_2)^2}}{n_2-1}}= \frac{S_1^2}{(2S_2)^2}\cdot \frac{(2\sigma_2)^2}{\sigma_1^2}\overset{H_0}\sim F(n_1-1, n_2-1) $$
> take test statistic $F = \frac{S_1^2}{4S_2^2}$.

### Goodness of fit test
When the type of distribution that the population obeys is unknown, we need to test the hypothesis of the distribution of the population first. That is to test:
$H_0:F(x) =F_0(x).$
where $F(x)$ is the unknown distribution function of the population, and $F_0(x)$ is some kind of known distribution function.
This kind of hypothesis test is called the **goodness of fit test**.

> If $X$ is discrete, $H_0: P\{X =x_i\} = p_i, i=1,2,...$
> 
> If $X$ is continuous, $H_0: X\sim f(x)$.
> 
> If $F_0(x)$ includes unknown parameters, use the population given to solve the **MLE** of the parameter to replace it.
### $\chi^2$ goodness of fit hypothesis test theorem
Presume that $F(x)$ has no unknown parameters.
1.Divide the $n$ samples into $k$ pairwise disjoint subsets $A_1, A_2, …,A_k$.

> Usually take $k \in [5,15].$

2.Count the number $n_i$ that sample values falls into $A_i$, then the frequency that $A_i$ happens in $n$ trials is $\frac{n_i}n$, and $\frac1n \sum^k_{i=1}n_i=1$.
3.If $H_0$ is true, solve $p_i = P_{H_0} (A_i), i=1, …, k,$ then $np_i$ is called the **theoretical frequency**, $n_i$ is called the **actual frequency**, and $n_i \sim B(n,p_i)$.
4.The rejection region of $H_0$ is $\sum^k_{i=1} (\frac{n_i}{n} -p)^2≥c$.
$n_i \sim B(n, p_i)$, then when $n$ is big enough, $n_i \overset{\cdot}\sim N(np_i, np_iq_i) \Rightarrow \frac{n_i -np_i}{\sqrt{np_iq_i}} \overset{\cdot}\sim N(0,1)$
$\Rightarrow \because \sum^k_{i=1}(n_1-np_i)=0,\therefore \sum^k_{i=1}\frac{(n_1-np_i)^2}{np_iq_i}\overset{\cdot}\sim \chi^2(k-1)\xrightarrow[q_i=1-p_1\approx 1]{p_i \ll 1}\sum^k_{i=1}\frac n{p_i}(\frac{n_i}{n} -p_i)^2\overset{\cdot}\sim \chi^2(k-1).$
After simplification, we reach the conclusion of **Chi-square(** $\chi^2$ **) goodness of fit hypothesis test theorem:**
If $n$ is big enough( $n≥50$ ), when $H_0$ holds, then
$\chi^2 =\sum^k_{i=1}\frac n{p_1} (\frac{n_i}{n}-p)^2 =\sum^k_{i=1}\frac{n_i^2}{np_i} -n \overset{\cdot}\sim \chi^2(k-1).$
the rejection region is $\chi^2≥ \chi^2_\alpha(k-1)$.
If there are $r$ unknown parameters, derive the MLE from the samples first and then solve the estimator of $p_i$: $\hat p_i = \hat P_{H_0}(A_i)$, then
$\chi^2 =\sum^k_{i=1} \frac{n_i^2}{n\hat p_i} -n\overset{\cdot}\sim \chi^2(k-r-1).$

> Note that to apply the $\chi^2$ goodness of fit test theorem, $n$ must be big enough( $n≥50$ ), while $np_i(n\hat p_i)$ cannot be too small( $np_i(n\hat p_i)\ge 5$ )


> [!important]  **e.g.3 During the 432 years from 1500 to 1931, the times of wars each year could be seen as a random variable. Statistics show that 299 wars occurred in total:**
> |Times of war in a year $X$|0|1|2|3|≥4|
> |---|---|---|---|---|---|
> |Years that $X$ wars occurred|223|142|48|15|4|
> **Generally we assume that $X$ obeys Poisson distribution, then do the statistics above have enough reason to refute the assumption?**
> $H_0: X\sim P(\lambda),\lambda$ unknown, $\hat \lambda = \bar x = \frac{299}{432} = 0.69$.
> $\hat p_i = \hat P(X=i)=\frac{e^{-\hat \lambda}\hat\lambda^i}{i!},\ i=0,1,2,3, \ \ \hat p_4 =1- \sum^3_{i=0}\hat p_i, \ n=432.$
> then list the table for assumption:
> 
> |X|0|1|2|3|≥4|
> |---|---|---|---|---|---|
> |$\hat p_i$|0.502|0.346|0.119|0.027|0.006|
> |$n\hat p_i$|217|149|51|12|3|
> Since for $\hat p_4$, $n\hat p_4<5$, we need to group $\hat p_3 , \hat p_4$ together(usually we group two neighbours)
> Let the test statistic be $\chi^2 = \sum^k_{i=1} \frac{n_i^2}{n\hat p_i}-n$, the rejection region of $H_0$ is $\chi^2 \ge \chi^2_\alpha (k-r-1)$, where $n =432, \alpha =0.05, k =4, r =1$.
> So $\chi^2 = \frac{223^2}{217}+\frac{142^2}{149}+\frac{48^2}{51}+\frac{19^2}{15}-432=1.74<\chi^2_{0.05}(4-1-1)=5.991$.
> Therefore, we cannot reject $H_0$, thus we assume the times of wars each year obeys Poisson distribution.

Though by interval division, Pearson - $\chi^2$ test can be used to test continuous variant, it depends on the way of division, therefore the accuracy is influenced.
Therefore, Pearson - $\chi^2$ test applies to **discrete variants**.