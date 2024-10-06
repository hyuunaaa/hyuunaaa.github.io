---

# Leave the homepage title empty to use the site title
title: experience
date: 2024-02-25
type: landing

sections:

  - block: features
    content:
      title: 
      text: <br><span style="font-size:125%">OOO을 소개합니다.</span>

  - block: slider
    content:
      slides:

      # 1. MBTI 검사 사이트
      - title: <span style="font-size:90%">MBTI 검사 사이트</span>
        content: <span style="font-size:90%">심리검사 테스트를 해볼 수 있는 사이트입니다. 구글 애드센스로 광고 수입을 받기 위해 만들었으나, 현재는 외주로 수익을 내고 있습니다.</span>
        align: center
        background:
          image:
            filename: k_mbti.png
            filters:
              brightness: 0.4
          position: center
          color: '#000'
        link:
          icon: external-link-alt
          icon_pack: fas
          text: <span style="font-size:60%">바로가기</span>
          text-color: '#fff'
          url: https://supermbti.netlify.app/
          style: "transition: background-color 0.3s ease; background-color: #007BFF; color: #fff;"
          hover_style: "background-color: #FFD700;"


      

    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '350px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000

  # - block: hero
  #   content:
  #     title: |
  #       <span style="font-size:75%">Medical AI & Computational Science (MACS) Lab</span>
  #     image:
  #       filename: welcome.jpg
  #     text: |
  #       <br>
  
---
