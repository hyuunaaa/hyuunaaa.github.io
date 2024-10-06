---
title: Food Research Institute - Data Testing
date: 2024-03-27
tags: ['Food Research Institute', 'Viscosity Estimation Test']
---

<!--more-->

1. **Data Preprocessing**  
- Remove meaningless data.
- If cooling is not present, delete data after the maximum temperature.
- If cooling is present, delete data after the cooling phase.

2. **Prediction Method**  
- Use the LSTM (Long Short-Term Memory) model for viscosity prediction.
- Highlight that LSTM is suitable for time-series data.
- Explain that CNN (Convolutional Neural Network) is not appropriate due to the need for fixed-size data.

**Link**  
[Hyun-Ah's Development Practice](https://hyuunaaa.github.io/)
