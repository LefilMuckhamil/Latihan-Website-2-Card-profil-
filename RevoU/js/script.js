// Memilih elemen-elemen yang kita butuhkan
const todoForm = document.querySelector(".todo-form");
const todoInput = document.getElementById("todo-input");
const dueDateInput = document.getElementById("due-date-input");
const todoList = document.getElementById("todo-list");
const deleteAllBtn = document.getElementById("delete-all-btn");

// Fungsi untuk membuat elemen tugas baru dan menampilkannya
function addTodo(taskText, dueDate) {
  // 1. Buat elemen <li> sebagai pembungkus
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  // 2. Isi konten HTML untuk item tugas
  todoItem.innerHTML = `
        <span>${taskText}</span>
        <span>${dueDate}</span>
        <span><input type="checkbox" class="status-check"> Belum</span>
        <div class="item-actions">
            <button class="delete-btn">🗑️</button>
        </div>
    `;

  // 3. Tambahkan item tugas baru ini ke dalam daftar <ul>
  todoList.appendChild(todoItem);
}

// Aksi saat form disubmit (tombol + ditekan)
todoForm.addEventListener("submit", function (event) {
  // Mencegah form mengirim data dan me-refresh halaman (perilaku default)
  event.preventDefault();

  // Ambil nilai dari input
  const newTodoText = todoInput.value;
  const newDueDate = dueDateInput.value;

  // Validasi: pastikan input tidak kosong
  if (newTodoText.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Panggil fungsi untuk menambah tugas
  addTodo(newTodoText, newDueDate);

  // Kosongkan kembali input field setelah tugas ditambahkan
  todoInput.value = "";
  dueDateInput.value = "";
});

// Aksi saat tombol di dalam daftar tugas ditekan (hapus atau ubah status)
todoList.addEventListener("click", function (event) {
  const item = event.target;
  const todoItem = item.closest(".todo-item");

  // Jika tombol hapus (delete-btn) yang ditekan
  if (item.classList.contains("delete-btn")) {
    todoItem.remove();
  }

  // Jika checkbox status yang ditekan
  if (item.classList.contains("status-check")) {
    todoItem.classList.toggle("completed");
    const statusSpan = todoItem.querySelector("span:nth-child(3)");
    if (item.checked) {
      statusSpan.innerHTML =
        '<input type="checkbox" class="status-check" checked> Selesai';
    } else {
      statusSpan.innerHTML =
        '<input type="checkbox" class="status-check"> Belum';
    }
  }
});

// Aksi saat tombol "DELETE ALL" ditekan
deleteAllBtn.addEventListener("click", function () {
  // Hapus semua isi dari <ul>
  todoList.innerHTML = "";
});
