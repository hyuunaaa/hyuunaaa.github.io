---
# Leave the homepage title empty to use the site title
title: 개인페이지
date: 2024-03-25
type: landing
sections:


  - block: about.biography
    id: about
    content:
      title: ''
      username: admin
    design:
      background:
        image:
          filename: 배경이미지.jpg
          # Optional: Set background image options
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: "<span style=\"font-size:75%\">**About me**</span>"
      text: |- 
        <span class="justified-text" style="color: gray;">
        최종적으로 행복하게 하고싶은 것 다하면서 사는 것이 목표이며, 이를 위해 현재 주어진 일에 최선을 다하고자 합니다. CV 연구실에서 딥러닝과 영상처리를 배우고 있으며, 최근에는 보안 분야에도 관심이 높아져 공부해보는 중입니다.
        </span>

  - block: features
    id: features
    content:
      title: "<span style=\"font-size:75%\">**My interests**</span>"
      #text: "저는 다음과 같은 주제에 관심이 있습니다.<br><br>"
      items:
        - name: 인공지능
          icon: robot
          icon_pack: fas
          description: "<span style=\"font-size:90%\">인공지능, 딥러닝, 컴퓨터비전</span>"
        - name: 보안
          icon: shield-halved
          icon_pack: fas
          description: "<span style=\"font-size:90%\">시스템보안, 리버스 엔지니어링</span>"
        - name: 음악
          icon: music
          icon_pack: fas
          description: "<span style=\"font-size:90%\">데이먼스 이어, 릴러말즈, 저스틴비버</span>"
        - name: 영화
          icon: film
          icon_pack: fas
          description: "<span style=\"font-size:90%\">해리포터, 토이스토리, 타이타닉</span>"
        - name: 운동
          icon: person-walking
          icon_pack: fas
          description: "<span style=\"font-size:90%\">수영, 헬스, 필라테스</span>"
        - name: 여행
          icon: plane
          icon_pack: fas
          description: "<span style=\"font-size:90%\">미국, 캐나다, 일본, 이탈리아, 호주</span>"


  - block: features
    content:
      title: "<span style=\"font-size:70%\">**Hyuna's Portfolio**</span>"
      text: "<br><span style=\"font-size:125%\">김현아의 포트폴리오 사이트에 오신 것을 환영합니다.</span> <br><br>{{% cta cta_link=\"./field/\" cta_text=\"더보기 →\" %}}"

  - block: slider
    content:
      slides:
        - title: "<span style=\"font-size:70%\">**Activities**</span>"
          content: "<span style=\"font-size:70%\">대학에서의 다양한 활동</span>"
          align: center
          background:
            image:
              filename: activities.jpg
              filters:
                brightness: 0.4
            position: center
            color: '#000'
          link:
            icon: external-link-alt
            icon_pack: fas
            text: "Image 출처: Unsplash"
            text-color: '#fff'
            url: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/three-person-pointing-the-silver-laptop-computer-2FPjlAyMQTA"

        - title: "<span style=\"font-size:70%\">**Interests**</span>"
          content: "<span style=\"font-size:70%\">진로, 취업, 영화 등등</span>"
          align: center
          background:
            image:
              filename: interests.jpg
              filters:
                brightness: 0.4
            position: center
            color: '#000'
          link:
            icon: external-link-alt
            icon_pack: fas
            text: "Image 출처: Unsplash"
            text-color: '#fff'
            url: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%92%80%EB%B0%AD%EC%97%90%EC%84%9C-%EB%8B%AC%EB%A6%AC%EB%8A%94-%ED%9D%B0%EC%83%89-shih-tzu-%EA%B0%95%EC%95%84%EC%A7%80%EC%9D%98-%EC%96%95%EC%9D%80-%EC%B4%88%EC%A0%90-%EC%82%AC%EC%A7%84-qO-PIF84Vxg"

        - title: "<span style=\"font-size:70%\">**Contact**</span>"
          content: "<span style=\"font-size:70%\">이메일, 연락처, 위치</span>"
          align: center
          background:
            image:
              filename: contact.jpg
              filters:
                brightness: 0.4
            position: center
            color: '#000'
          link:
            icon: external-link-alt
            icon_pack: fas
            text: "Image 출처: Unsplash"
            text-color: '#fff'
            url: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%ED%94%84%EB%A6%B0%ED%84%B0-%EC%A2%85%EC%9D%B4%EC%99%80-%EA%B2%80%EC%9D%80-%EB%B3%BC%ED%8E%9C-%EC%98%86%EC%97%90-%EC%8C%93%EC%9D%B8-%EC%B1%85-%EB%8D%94%EB%AF%B8-asviIGR3CPE"

        - title: "<span style=\"font-size:70%\">**Goals**</span>"
          content: "<span style=\"font-size:70%\">대학원, 목표</span>"
          align: center
          background:
            image:
              filename: goals.jpg
              filters:
                brightness: 0.4
            position: center
            color: '#000'
          link:
            icon: external-link-alt
            icon_pack: fas
            text: "Image 출처: Unsplash"
            text-color: '#fff'
            url: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/macbook-pro%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C-744oGeqpxPQ"

        - title: "<span style=\"font-size:70%\">**Me**</span>"
          content: "<span style=\"font-size:70%\">기배기</span>"
          align: center
          background:
            image:
              filename: about me.jpg
              filters:
                brightness: 0.4
            position: center
            color: '#000'
          link:
            icon: external-link-alt
            icon_pack: fas
            text: "Image 출처: Unsplash"
            text-color: '#fff'
            url: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/snowman-near-the-people-and-trees-at-sunset-TU8oZ2YYNlU"

    design:
      slide_height: '350px'
      slide_width: '100%'
      is_fullscreen: false
      loop: true
      interval: 3000



  - block: collection
    content:
      id: section-1
      title: Interests
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - notification
          - post
          - event
    design:
      view: compact
      columns: '2'

  - block: collection
    content:
      id: section-1
      title: Projects
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - field
    design:
      view: community/custom_card
      columns: '2'


  - block: collection
    content:
      title: Publications
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: publication
    design:
      view: community/custom_card
      columns: '2'
    advanced:
      css_style: "text-align: center;"


---
