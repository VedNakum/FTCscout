src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"

        function SubForm() {
            $.ajax({
                url: 'https://api.apispreadsheets.com/data/U20YWbdyS9VZZRCv/',
                type: 'post',
                data: $("#myForm").serializeArray(),
                success: function () {
                    alert("Scouting Added");
                },
                error: function () {
                    alert("Scouting Added");
                }
            });
        }