/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return new Promise((resolve) => {
        mock(100)
          .then((data1) => {
              result.push(data1);
          })
        mock(200).then((data2) => {
            result.push(data2);
        })
        mock(300).then((data3) => {
            result.push(data3);
        });
        resolve(result)
    })
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        if (err instanceof Error) {
           return err.message;
        }
    }
}
