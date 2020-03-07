import { showUserInfo } from '../src/ex02';

test('name', () => {
  let expected = {
     name: 'John Smith',
     age: 16,
     private: false,
  }
  expect(showUserInfo(expected).name).toBe('John Smith');
});

test('age', () => {
    let expected = {
       name: 'John Smith',
       age: 16,
       private: false,
    }
    expect(showUserInfo(expected).age).toBe(16);
  });

  test('private', () => {
    let expected = {
       name: 'John Smith',
       age: 16,
       private: false,
    }
    expect(showUserInfo(expected).private).toBe(false);
  });
