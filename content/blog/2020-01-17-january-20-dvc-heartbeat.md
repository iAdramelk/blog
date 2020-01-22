---
title: January '20 DVC❤️Heartbeat
date: 2020-01-17
description: |
  Reaching 100 contributors, PyData LA, 
  and more news from the DVC community.
descriptionLong: |
  Every month we share news, findings, interesting reads,
  community takeaways, and everything else along the way.
  Some of those are related to our brainchild DVC and its journey. The others
  are a collection of exciting stories and ideas centered around ML best
  practices and workflow.
picture: ../../static/uploads/images/2020-01-17/DVC_chalk_donuts.png
pictureComment: We spread the joys of version control and donuts at PyData LA.
author: ../authors/elle_obrien.md
commentsUrl: https://discuss.dvc.org/t/january-20-dvc-heartbeat/314
tags:
  - Heartbeat
  - PyData
  - DVC
---

Welcome to the New Year! Time for a recap of the last few weeks of activity in
the DVC community.

## News

-We were honored to be named a
[Project of the Year](https://ods.ai/awards/2019/) by Open Data Science,
Russia's largest community of data scientists and machine learning
practitioners. Check out our ⭐️incredibly shiny trophy⭐️!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">DVC is the &quot;project of the year&quot; according to <a href="https://twitter.com/odsai_en?ref_src=twsrc%5Etfw">@odsai_en</a>!<br>😱🏆🎉<br>Open Data Science the largest DS community we know, with over 40K active members, great courses and it&#39;s own conf Data Fest.<br>Many thanks to the organizers and voters!<br>This is the best surprize gift for the team!!🥳 <a href="https://t.co/LZgewjM582">pic.twitter.com/LZgewjM582</a></p>&mdash; 🦉DVC (@DVCorg) <a href="https://twitter.com/DVCorg/status/1209544709930016768?ref_src=twsrc%5Etfw">December 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

-DVC hit **100 individual contributors** on Github! To celebrate, we picked 3 of
our favorite pull requests around the 100-mark to give prizes to. Meet our
winners: [Vera Sativa](https://github.com/verasativa/),
[Vít Novotný](https://twitter.com/tweetiko), and
[David Příhoda](https://twitter.com/david_prihoda). Vera, Vít and David each
received \$500 to use on any educational opportunity of their choosing and, of
course, their own DeeVee (that's our rainbow owl) to keep.

![](/uploads/images/2020-01-17/odd_with_deevee.png)_Vera (center, flashing a
peace sign) thanked us with this lovely picture of DeeVee and her team,
[Odd Industries](https://odd.co/en/). They are making some extremely neat tools
for construction teams using computer vision._

-We were at PyData LA! Our fearless leader
[Dmitry gave a talk](https://www.youtube.com/watch?v=7Wsd6V0k4Oc) and we set up
a busy booth to meet with the Pythonistas of Los Angeles. It was a cold and
blustery day, but visitors kept showing up to our semi-outdoor booth. We're sure
they came for the open source version control and not the donuts.

![](/uploads/images/2020-01-17/py_data1.jpeg)
![](/uploads/images/2020-01-17/py_data2.jpeg) _The DVC team and PyData
volunteers who heroically staffed our booth in the rain._

Our engineer and technical writer Jorge reported:

> We were super happy to meet all kinds of data professionals and enthusiasts in
> several fields who are learning and adopting DVC with their teams – including
> several working with privacy-sensitive medical records, very cool!

## From the community

Here are some rumblings from the machine learning (ML) and data science
community that got us talking.

-**A machine learning software wishlist.** Computer scientist and writer
[Chip Huyen](https://twitter.com/chipro) tweeted about her ML software wishlist
and kicked off a big community discussion.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve been thinking about the software stack for machine learning. Tools I&#39;d love to see.<br><br>1. Pip for pretrained models.<br>2. Version control for datasets.<br>3. GPU-friendly CI. Travis CI, Circe CI don&#39;t support GPUs. Jenkins is a pain.<br>4. Fast dataframes. Why is Pandas so slow?</p>&mdash; Chip Huyen (@chipro) <a href="https://twitter.com/chipro/status/1202815757593108480?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Her tweet resonated with a lot of practitioners, who were eager to discuss the
solutions they'd tried. Among the many thoughtful replies and recommendations,
we were thrilled to see DVC mentioned.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re using <a href="https://twitter.com/DVCorg?ref_src=twsrc%5Etfw">@DVCorg</a> for 2) and it works great. 🙂</p>&mdash; Kristijan Ivancic (@kristijan_ivanc) <a href="https://twitter.com/kristijan_ivanc/status/1202879739716870144?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

If you haven't already, definitely check out Chip's
[thread](https://twitter.com/chipro/status/1202815757593108480), and follow her
on Twitter for more excllent, accessible content about ML engineering. We're
thinking hard about these ideas and hope the discussion continues on- and
offline.

-**A gentle intro to DVC for data scientists.** Scientist
[Elle O'Brien](https://twitter.com/andronovhopf) published a code walkthrough
about using DVC to make an image classification project more reproducible.
Specifically, the blog is a case study about version control when a dataset
grows over time. If you're looking for a DVC tutorial geared for data
scientists, this might be up your alley.

<a href="https://towardsdatascience.com/start-version-controlling-your-machine-learning-datasets-2b872e109856" class="external-link-preview">
  <section class="elp-content-holder">
    <div class="elp-description-holder">
      <h4 class="elp-title">Start Version Controlling your Machine Learning Datasets</h4>
      <div class="elp-description">Make your machine learning and data science projects reproducible with open source tools.</div>
      <div class="elp-link">medium.com</div>
    </div>
    <div class="elp-image-holder">
      <img src="/uploads/images/2020-01-17/medium_1.png" />
    </div>
  </section>
</a>

-**Ideas for data scientists to level up their code** Machine learning engineer
Andrew Greatorex posted a blog called “Down with technical debt! Clean Python
for data scientists.” Andrew highlights something we can easily relate to: the
“science” part of data science, which encourages experimentation and
flexibility, sometimes means less emphasis on readable, shareable code. Andrew
writes:

> "I’m hoping to shed light on some of the ways that more fledgling data
> scientists can write cleaner Python code and better structure small scale
> projects, with the important side effect of reducing the amount of technical
> debt you inadvertently burden on yourself and your team.”

In this blog, DVC gets a shout-out as Andrew’s preferred data versioning tool,
used in conjunction with Git for versioning Python code. Thanks!

<a href="https://towardsdatascience.com/down-with-technical-debt-clean-python-for-data-scientists-aa7592eff7fc" class="external-link-preview">
  <section class="elp-content-holder">
    <div class="elp-description-holder">
      <h4 class="elp-title">Down with technical debt! Clean Python for data scientists.</h4>
      <div class="elp-description"></div>
      <div class="elp-link">medium.com</div>
    </div>
    <div class="elp-image-holder">
      <img src="/uploads/images/2020-01-17/medium_2.png" />
    </div>
  </section>
</a>

-**An introduction to MLOps** Engineer
[Sharif Elfouly](https://twitter.com/elfouly_sharif) wrote an approachable guide
to thinking about MLOps, the growing field around making ML projects run
efficiently from experimentation to production. He summarises why managing ML
projects can be fundamentally different than traditional software development:

> “The main difference between traditional software and ML is that you don’t
> only have the code. You also have data, models, and experiments. Writing
> traditional software is relatively straightforward but in ML you need to try
> out a lot of different things to find the best and fastest model for your
> use-case. You have a lot of different model types to choose from and every
> single one of them has its specific hyperparameters. Even if you work alone
> this can get out of hand pretty quickly.”

Sharif gives some recommendations for tools that work especially well for ML,
and he writes that DVC is the “perfect combination for versioning your code and
data.” Thanks, Sharif! We think you’re perfect, too.

<a href="https://towardsdatascience.com/down-with-technical-debt-clean-python-for-data-scientists-aa7592eff7fc" class="external-link-preview">
  <section class="elp-content-holder">
    <div class="elp-description-holder">
      <h4 class="elp-title">MLOps Done Right</h4>
      <div class="elp-description">What is MLOps? Why is it so important? How to do it right!</div>
      <div class="elp-link">medium.com</div>
    </div>
    <div class="elp-image-holder">
      <img src="/uploads/images/2020-01-17/medium_3.png" />
    </div>
  </section>
</a>

That's a wrap for January. We'll see you next month with more updates!
