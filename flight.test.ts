import {expect,test} from 'bun:test';
import {Flight} from './src/flight';
function flight(){const g=new Flight({getContext:()=>({})} as unknown as HTMLCanvasElement);g.sound=false;return g;}
test('flight advances, throttle changes speed, pause freezes position',()=>{const g=flight();g.start('free');const z=g.p.z;g.keys.add('shift');for(let i=0;i<50;i++)g.update(.02);expect(g.p.z).toBeGreaterThan(z);expect(g.throttle).toBeGreaterThan(.9);g.state='paused';const p={...g.p};g.update(1);expect(g.p).toEqual(p);});
test('terrain collision ends flight and restart restores aircraft',()=>{const g=flight();g.start('free');g.p.y=-100;g.update(.01);expect(g.state).toBe('lost');g.start('combat');expect(g.hull).toBe(100);expect(g.enemies).toHaveLength(5);expect(g.missiles).toBe(6);});
test('target acquisition and guided missile destroy an enemy',()=>{const g=flight();g.start('combat');g.yaw=0;g.pitch=0;g.enemies=[{p:{x:0,y:1700,z:-3100},yaw:0,hp:100,id:1}];g.update(.01);expect(g.target).toBeDefined();g.fire(true);expect(g.missiles).toBe(5);for(let i=0;i<100;i++)g.update(.01);expect(g.kills).toBe(1);expect(g.enemies).toHaveLength(0);});
test('cannon cooldown prevents duplicate fire and free flight removes hostiles',()=>{const g=flight();g.start('free');expect(g.enemies).toHaveLength(0);g.fire();g.fire();expect(g.shots).toHaveLength(1);g.update(.1);g.fire();expect(g.shots).toHaveLength(2);});
