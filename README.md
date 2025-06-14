# Core Pipeline Stage

Core CDP Forge Platform module providing the first stage of an extensibile ETL log pipeline.

## Overview

This project is designed to transform, process, and forwards logs using various technologies including Kafka, and MySQL. It provides a robust solution for log management and analysis.

## Features

- Log transformation and processing
- Kafka integration for message streaming
- MySQL database support
- User agent parsing
- GeoIP lookup capabilities

## Prerequisites

- Node.js (Latest LTS version recommended)
- TypeScript
- MySQL
- Kafka

## Installation

```bash
npm install
```

```bash
npm run build
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Running Tests
```bash
npm test
```