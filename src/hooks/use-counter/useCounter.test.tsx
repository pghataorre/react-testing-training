import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('hook should return count value as 0 default', () => {
    const {result: {current} }  = renderHook(useCounter);
    expect(current.count).toBe(0);
  })

  it('hook should return the inserted parameter value', () => {
    const {result: {current} }  = renderHook(useCounter,{initialProps: {
      initialCount: 10
    }});

    expect(current.count).toBe(10);
  });

  it('hook should return an incremented value', () => {
    const { result }  = renderHook(useCounter);

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('hook should return an decremented value', () => {
    const { result }  = renderHook(useCounter);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
})
