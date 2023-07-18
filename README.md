# Display Stock Market Information (Maskan finance)

This project aims to collect and display stock market information using data retrieved from the tsetmc service. 



## Features

- Fetch stock index information from the tsetmc service.
- Store the index information in the global state using **context**.
- Implement a search feature to find specific index by user
- Display the trading history of a selected index in an **OHLC** chart using Highcharts library.
- Display the trading history of a selected index in a table. (Virtual scrolling)
- Utilize React Select for enhanced user-friendly dropdown selection for index search.
- Utilize SASS for styling and CSS pre-processing.
## Technologies

- **Javascript**
- [**React**](https://react.dev/)
- [SASS](https://sass-lang.com/)
- [Highcharts](https://www.highcharts.com/) 
- React Select 
- tsetmc API



## Installation

1. Clone the repository: 

```bash
  $ git clone [repository URL]
```

2. Navigate to the project directory: cd gathering-and-displaying-stock-market-info

```bash
  $ cd maskan-finance
```

3. Install the dependencies: 

```bash
  $ npm install
```

## Usage

 1. Start the development server:

```bash
  $ npm start
```

2. Open your web browser and navigate to http://localhost:3000




## Folder Structure

The project follows the standard folder structure of a React application:

```css
maskan-finance/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    assets/
      ...
    components/
      details/
        IndexChart.jsx
        IndexTable.jsx
      Header.jsx
      Search.jsx
    container/
      Dashboard.jsx
      Details.jsx
    context/
      indexHistoryProvider.js
      indexProvider.js
    utils/
      api/
      helpers/
    styles/
      ...
    App.js
    index.js
    package.json
    README.md
    ...
```

- **`public/`**: Contains the public assets and the main **`index.html`** file.
- **`src/`**: Contains the application source code.
  - **`components/`**: Contains the components used in the application.
  - **`container/`**: It includes components that contain state and are used as a holder for other components.
  - **`context/`**: Contains the context files for storing and accessing global state.
  - **`utils/`**: Contains utility functions including API and helper functions.
  - **`styles/`**: Contains the global style for the application.
  - **`App.js`**: The main component that renders the application.
  - **`index.js`**: The entry point of the application.
## Git Workflow
This project follows the **Gitflow Workflow** for managing the development process and version control. The Gitflow Workflow is a branching model that provides a robust framework for collaboration and feature development.

### Branches
The repository includes the following branches:

- **`master`**: The master branch represents the stable production-ready version of the project.
- **`develop`**: The develop branch serves as the main branch for ongoing development and integration of features.
- **`features/index-dashboard`**: The features/index-dashboard branch was created from master and used for constructing the index dashboard feature. Once development was complete, it was merged back into master and versioned accordingly.

### Versioning
We follow a versioning scheme to track the releases and changes made to the project. Each merge into master triggers a new version release, and we use Semantic Versioning (SemVer) to assign version numbers to our releases.
## Contributing

This project is currently under development and not open for external contributions. However, feedback and suggestions are welcome and appreciated.

