---
title: People
date: 2024-06-11

type: landing

sections:
  - block: people
    content:
      title: 
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - human
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
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

  - block: people
    content:
      title: "<span style=\"font-size:75%\">**My Favorites**</span>"
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
        - pet
          # - 박사과정
          # - 석사과정
          # - 학부연구생
          # - Principal Investigators
          # - Researchers
          # - Grad Students
          # - Administration
          # - Visitors
          # - Alumni
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: false
      show_social: false
      columns: 2
---