fetch("./students.json")
.then(response => {
    if (!response.ok) {
        throw new Error('Помилка завантаження файлу');
    }
    return response.json();
    })
    .then(data => {
        let jsonFormant = JSON.stringify(data)
        try {
            let parsFormat = JSON.parse(jsonFormant)
            let photo = document.createElement('img')
            photo.src = parsFormat.studentsPhoto
            document.body.appendChild(photo)

            let name = document.createElement('p')
            studentsName.textContent = parsFormat.studentsName
            document.body.appendChild(name)
        }

        catch(error){
            console.error("ERROR")
        }
    })