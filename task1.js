const fs = require('fs');

fs.mkdir('myFolder', (err) => {
    if (err) {
        console.log('Ошибка создания каталога:', err.message);
        return;
    }

    console.log('Каталог myFolder успешно создан!');

    
    fs.rmdir('myFolder', (err) => {
        if (err) {
            console.log('Ошибка удаления каталога:', err.message);
            return;
        }

        console.log('Каталог myFolder успешно удалён!');
    });
});
