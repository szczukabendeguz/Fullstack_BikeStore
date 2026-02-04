# Fullstack BikeStore

This project is an advanced evolution and further development of the original [BikeStore](https://github.com/szczukabendeguz/BikeStore) repository.

## Tech Stack

**Frontend:**
[![My Skills](https://skillicons.dev/icons?i=angular,bootstrap,ts,html,css)](https://skillicons.dev)

- **Framework:** Angular 19
- **Language:** TypeScript
- **Styling:** Bootstrap 5, CSS3
- **State Management & Async:** RxJS

**Backend:**
[![My Skills](https://skillicons.dev/icons?i=dotnet,cs)](https://skillicons.dev)

- **Framework:** .NET 8.0 (ASP.NET Core Web API)
- **Language:** C#
- **ORM (Database):** Entity Framework Core (SQL Server)
- **Authentication:** ASP.NET Core Identity (JWT Bearer)
- **Object Mapping:** AutoMapper
- **API Documentation:** Swagger UI (Swashbuckle)

## Project Goal

This application provides a complete solution for managing a bicycle shop's inventory, serving as a full-stack upgrade to the original concept. It enables users to browse, create, edit, and delete bicycle brands and models through a modern, responsive web interface. The system includes features for filtering data by brand and calculating statistics like average prices.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js
- .NET 8.0 SDK
- SQL Server (or LocalDB)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd BACKEND/BikeStore/BikeStore-master
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Run the API:
   ```bash
   dotnet run --project BikeStore.Endpoint
   ```
   The backend typically listens on `https://localhost:7xxx` or `http://localhost:5xxx`.

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd FRONTEND/bikestore
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:4200`.

## Architecture

- **Endpoint Layer:** Exposes the REST API and handles JWT authentication.
- **Logic Layer:** Implements business logic and services.
- **Data Layer:** Manages database interactions using Entity Framework Core and SQL Server.
- **Frontend:** A component-based Angular Single Page Application implemented with Bootstrap for responsive design.

---

# Fullstack BikeStore

Ez a projekt az eredeti [BikeStore](https://github.com/szczukabendeguz/BikeStore) repository továbbfejlesztett, full-stack változata.

## Tech Stack

**Frontend:**
[![My Skills](https://skillicons.dev/icons?i=angular,bootstrap,ts,html,css)](https://skillicons.dev)

- **Framework:** Angular 19
- **Language:** TypeScript
- **Styling:** Bootstrap 5, CSS3
- **State Management & Async:** RxJS

**Backend:**
[![My Skills](https://skillicons.dev/icons?i=dotnet,cs)](https://skillicons.dev)

- **Framework:** .NET 8.0 (ASP.NET Core Web API)
- **Language:** C#
- **ORM (Database):** Entity Framework Core (SQL Server)
- **Authentication:** ASP.NET Core Identity (JWT Bearer)
- **Object Mapping:** AutoMapper
- **API Documentation:** Swagger UI (Swashbuckle)

## Projekt Célja

Az alkalmazás teljes körű megoldást nyújt egy kerékpárüzlet készletének kezelésére, modern webes felületet biztosítva a korábbi verzióhoz képest. Lehetővé teszi a felhasználók számára kerékpármárkák és modellek böngészését, létrehozását, szerkesztését és törlését. A rendszer olyan funkciókat is tartalmaz, mint az adatok márka szerinti szűrése és különböző statisztikák, például az átlagárak kiszámítása.

## Getting Started

Kövesd az alábbi lépéseket a projekt helyi futtatásához.

### Előfeltételek
- Node.js
- .NET 8.0 SDK
- SQL Server (vagy LocalDB)

### Backend Setup
1. Navigálj a backend könyvtárba:
   ```bash
   cd BACKEND/BikeStore/BikeStore-master
   ```
2. Állítsd helyre a függőségeket (dependencies):
   ```bash
   dotnet restore
   ```
3. Futtasd az API-t:
   ```bash
   dotnet run --project BikeStore.Endpoint
   ```

### Frontend Setup
1. Nyiss egy új terminált, és lépj a frontend könyvtárba:
   ```bash
   cd FRONTEND/bikestore
   ```
2. Telepítsd a csomagokat:
   ```bash
   npm install
   ```
3. Indítsd el az alkalmazást:
   ```bash
   npm start
   ```
4. Nyisd meg a böngészőt a `http://localhost:4200` címen.

## Architecture

- **Endpoint Layer:** A REST API és a JWT authentication kezelése.
- **Logic Layer:** Az üzleti logika (business logic) és a szolgáltatások megvalósítása.
- **Data Layer:** Adatbázis-műveletek kezelése Entity Framework Core és SQL Server segítségével.
- **Frontend:** Komponens alapú Angular Single Page Application, Bootstrap alapú reszponzív dizájnnal.