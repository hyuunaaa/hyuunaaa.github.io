---
title: '인공지능과 보안'

# Authors
authors:
  - 김현아

# Author notes (optional)
author_notes:
  - ''
  - ''
  - ''
  - 'Corresponding author'

# date format: '2013-07-01T00:00:00Z'
# date: '2024-03-20'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-20'

# Publication type.
publication_types: ['article-journal']

abstract: |
  인공지능의 보안문제라고 하면 영화에 등장하는 터미네이터를
연상하는 사람이 많다. 고도의 인공지능이 사람을 말살해야 할 존
재로 인식하고 이를 실행하는 것을 상상한다. 그러나 그러한 강인
공지능은 가까운 미래에 실현될 것으로 보기 어렵다. 본 장에서는
인공지능이 설계된 목표를 달성하는 과정에서 예상치 못한 부정
적인 결과를 초래하는 문제를 다루는 AI 세이프티 이슈를 소개하
고, 인공지능 시스템을 위협하는 다양한 보안 취약성을 소개한다.
1. AI 세이프티
최근 페이스북의 창업자인 마크 주커버그와 테슬라의 CEO인
앨런 머스크가 논쟁을 벌여 유명해진 인공지능으로 인한 종말시
나리오는 다음과 같다[1].
Turry는 고객에 수기로 감사 편지를 쓰는 간단한 구조의 인공지
능 로봇이다. Turry는 학습을 통해 더 멋진 필체의 감사 편지를 더
효율적으로 쓰도록 스스로를 개선하도록 프로그램되어 있다. 어느
날 Turry의 프로그래머는 Turry가 인터넷에 접속하여 지식을 획득
하고 알고리즘을 개선하도록 수정하였다. 또한 나노 로봇 기술을
접속하며 필요하면 소프트웨어 뿐 아니라 하드웨어적인 수정이 가
능하도록 만들었다. 이때부터 Turry는 멋진 감사편지를 효율적으
로 쓸 수 있도록 스스로를 개조하기 시작했다. Turry는 자신의 성
능을 최대화하도록 프로그램되어 있으므로, 모든 자원을 자신을 개
조하는데 쓰기 시작했다. 지구상의 모든 원소는 Turry의 컴퓨터와
로봇팔을 개선하는데 사용되었다. 모든 생물체도 마찬가지로..
이것은 스스로를 개선하는 학습 메커니즘을 의미하는 강화학
습이 적용된 인공지능으로 인해 발생할 수 있는 사고(accident)
의 극단적인 시나리오지만, 실제 자율주행 자동차의 사고 등 인
공지능 시스템의 사고는 빈번히 발생하고 있다. 여기서 사고
(accident)는 인공지능시스템 디자이너가 의도한 목표와 기능을
수행하는 과정에서 예상치 못한 해를 끼치는 것으로 정의된다.
AI 세이프티는 이러한 사고 발생 가능성을 미리 정의하고 이를
방지하는 것을 의미한다.
[2]에서 주로 강화학습과 관련하여 다음과 같은 5가지 AI 세
이프티 이슈를 청소 로봇의 예를 들어 소개하고 있다.
1. 부정적 부작용 (Negative side effects) 방지: 청소 로봇이
청소를 하면서 꽃병을 깨뜨리면 안된다.
2. 리워드 해킹 (Reward hacking) 방지: 청소 로봇이 쓰레기
를 보이지 않는 곳에 감춰 두기만 해놓고 청소를 잘한 것으
로 인정받도록 하면 안된다.
3. 확장 가능한 감독 (Scalable oversight): 청소 로봇은 작은
다이아몬드를 학습할 수 있지만, 큰 다이아몬드를 학습하
는 것은 어렵다. 이유는 학습용 큰 다이아몬드를 구입하는
데는 비용이 많이 들기 때문이다.
4. 안전한 탐색 (Safe Exploration): 청소로봇은 물이 있는
곳을 지나면 고장이 난다. 그렇지만 그것을 학습하는 방법
은 물이 있는 곳에 가보는 수 밖에 없다.
5. 적용 도메인 변경 (Robustness to Distributional Shift):
가정용으로 학습된 청소로봇을 공장에 투입했을 때 문제가
생길 수 있다.
이러한 AI세이프티 이슈에 대응하기 위해 미국 백악관은 보고
서[3]에서 AI 세이프티 엔지니어링의 역할을 다음과 같이 정리
하고 있다.
•검사(verification)과 확인 (validation)
•기술에 대한 세이프티 케이스 확보
•위험 관리
•위험에 관해 이해 상사자와 소통
동 보고서는 AI세이프티 엔지니어링의 발전을 위해 항공, 우
주 등 기존에 세이프티 엔지니어링이 잘 발달된 분야의 전문가
들과 AI전문가들이 협력할 것을 권고하고 있다. 

summary: 가이드...

tags: ['인공지능', '보안', '인공지능과 보안' ]



# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://hyuunaaa.github.io/publication/0020-fine-grained-binary-object-segmentation-in-remote-sensing-imagery-via-path-selective-test-time-adaptation/이력서.pdf'
# url_code: ''
# url_dataset: '{{url_dataset}}'
# url_poster: '{{url_poster}}'
# url_project: ''
# url_slides: ''
# url_source: 'https://doi.org/10.1109/TGRS.2024.3378311'
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---