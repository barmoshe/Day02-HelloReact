import { utilService } from "../services/util.service.js";
const { useState, useEffect } = React;

export function AnimalList({ animalInfos }) {
  return (
    <section className="animal-list">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {animalInfos.map((animalInfo, idx) => {
            return (
              <tr key={idx}>
                <td>{animalInfo.type}</td>
                <td>{animalInfo.count}</td>
                <td>
                  <button
                    onClick={() =>
                      utilService.openInNewTab(
                        `https://www.google.com/search?q=${animalInfo.type}`
                      )
                    }
                  >
                    Search
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
