import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Nav from '../../components/Nav';

const numCols = 25;
const numRows = 25;
const boxSize = 25;

const produce = (grid, callback) => {
  const newgrid = JSON.parse(JSON.stringify(grid));
  callback(newgrid);
  return newgrid;
};

export default function GameOfLife() {
  const [grid, setGrid] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const resetGrid = () => {
    setGrid(Array(numRows).fill(Array(numCols).fill(0)));
  };

  const toggleCell = (i, j) => {
    const newgrid = produce(grid, (newgrid) => {
      newgrid[i][j] = 1 - newgrid[i][j];
    });
    setGrid(newgrid);
  };

  useEffect(() => {
    resetGrid();
  }, []);

  useEffect(() => {
    const neighborsLocation = [
      [0, 1],
      [0, -1],
      [1, 1],
      [1, 0],
      [1, -1],
      [-1, 0],
      [-1, 1],
      [-1, -1],
    ];
    // animation loop
    let neighbors = 0;
    if (!isRunning) {
      return;
    } else {
      grid.map((rows, i) =>
        rows.map((col, j) => {
          neighborsLocation.map((coor) => {
            neighbors += grid[i + coor[0]][j + coor[1]];
          });
          if (neighbors == 3) {
            toggleCell(i, j);
          } else if (neighbors < 2 || (neighbors > 3 && grid[i][j] === 1)) {
            toggleCell(i, j);
          }
        })
      );
      // if neighbors < 2 = die
      // if neighbors > 3 = die
      // if neighbors = 3 = become alive
    }
  }, [isRunning]);

  return (
    <>
      <Head>
        <title>Game of Life</title>
        <meta
          name='description'
          content='Thibaud Gerin | Fullstack Developer | Javascript30'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav title={'Game of Life'} />
      <button onClick={() => setIsRunning(true)}>start sim</button>
      <Game>
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                background: grid[i][j] === 0 ? 'white' : 'blue',
              }}
              onClick={() => {
                toggleCell(i, j);
              }}
            ></div>
          ))
        )}
      </Game>
    </>
  );
}

const Game = styled.div`
  display: grid;
  padding-top: 40px;
  grid-template-columns: repeat(${numCols}, ${boxSize}px);
  place-content: center;

  div {
    border: 1px solid black;
    height: ${boxSize}px;
    width: ${boxSize}px;
  }
`;
