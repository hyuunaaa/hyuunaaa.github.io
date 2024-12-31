import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Redux Provider 추가
import store from './store/store'; // 경로 수정

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Redux 스토어 전달 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

// 앱 성능 측정 설정
reportWebVitals();
