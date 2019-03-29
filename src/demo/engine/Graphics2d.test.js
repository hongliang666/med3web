/**
 * @fileOverview Graphics2d.test
 * @author Epam
 * @version 1.0.0
 */

// ********************************************************
// Imports
// ********************************************************

import ToolArea from './tools2d/ToolArea';
import Graphics2d from './Graphics2d';

// ********************************************************
// Tests
// ********************************************************

describe('ToolArea. test line intersect', () => {
  it('ToolArea. test line intersect no 0', () => {
    // const gra = new Graphics2d();
    // const toolArea = new ToolArea(gra);

    const v0 = {
      x: 0.0,
      y: 0.0
    };
    const v1 = {
      x: 1.0,
      y: 0.0
    };
    const v2 = {
      x: 2.0,
      y: -1.0
    };
    const v3 = {
      x: 2.0,
      y: 1.0
    };
    const vInter = ToolArea.getLineIntersection(v0, v1, v2, v3);
    expect(vInter === null).toBeTruthy();
  });
  it('ToolArea. test line intersect yes 0', () => {
    // const gra = new Graphics2d();
    // const toolArea = new ToolArea(gra);

    const v0 = {
      x: 0.0,
      y: 0.0
    };
    const v1 = {
      x: 1.0,
      y: 0.0
    };
    const v2 = {
      x: 0.5,
      y: -1.0
    };
    const v3 = {
      x: 0.5,
      y: 1.0
    };
    const vInter = ToolArea.getLineIntersection(v0, v1, v2, v3);
    expect(vInter !== null).toBeTruthy();
    expect(vInter.x === 0.5).toBeTruthy();
    expect(vInter.y === 0.0).toBeTruthy();
  });
  it('ToolArea. test line intersect no paralel', () => {
    // const gra = new Graphics2d();
    // const toolArea = new ToolArea(gra);

    const v0 = {
      x: 0.0,
      y: 0.0
    };
    const v1 = {
      x: 1.0,
      y: 0.0
    };
    const v2 = {
      x: 0.0,
      y: 1.0
    };
    const v3 = {
      x: 1.0,
      y: 1.0
    };
    const vInter = ToolArea.getLineIntersection(v0, v1, v2, v3);
    expect(vInter === null).toBeTruthy();
  });
  it('ToolArea. test check area', () => {
    const vol = {
      m_xDim: 100.0,
      m_yDim: 100.0,
      m_zDim: 100.0,
      m_boxSize: {
        x: 10.0,
        y: 10.0,
        z: 10.0,
      }
    };
    const store = {
      volume: vol
    };
    const gra = new Graphics2d(store);
    const toolArea = new ToolArea(gra);
    toolArea.setScreenDim(100.0, 100.0);
    toolArea.setVolume(vol);

    const points = [];
    points.push({ x: 0.0, y: 0.0 });
    points.push({ x: 0.0, y: 100.0 });
    points.push({ x: 100.0, y: 100.0 });
    points.push({ x: 100.0, y: 0.0 });

    const area = toolArea.getPolyArea(points, store);
    // console.log(`test area = ${area}`);
    expect(area === 100.0).toBeTruthy();
  });

});
