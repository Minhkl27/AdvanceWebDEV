# Advanced WEB Development

## Technologies

Laravel Framework

OOP PHP

MVC

# Project: Quản Lý Sinh Viên

## UML

Structural Diagram

![image](https://github.com/user-attachments/assets/f49d6470-fdc3-4d3a-9e25-639af0db019a)


Behavioural Diagram
## Đăng nhập
![image](https://github.com/user-attachments/assets/40848fa5-553a-457f-815d-1a2ff441a62a)

## Teacher
![image](https://github.com/user-attachments/assets/3b18d3c7-4139-41ca-8b38-783b130de636)

## Student
![image](https://github.com/user-attachments/assets/f31c4357-baa5-44aa-9167-39c07446ad33)


## Plan
### Database
- `users`: Chứa danh sách tài khoản giáo viên và sinh viên
    - `name`: Họ và tên
    - `username`: Tài khoản đăng nhập (nếu là sinh viên thì `username` tương đương Mã số sinh viên)
    - `email`: Email liên hệ
    - `password`: Mật khẩu (sẽ mã hóa khi lưu vào database)
    - `role`: Chức vụ (`student`: Sinh viên, `teacher`: Giáo viên)
    - `profile_id`: ID của profile tương ứng, nếu `role` là `student` thì nó sẽ trỏ đến ID tương ứng trong bảng `student_profiles`, nếu `role` là `teacher` sẽ trỏ đến `teacher_profiles`
- `classes`: Chứa danh sách các lớp học
    - `name`: Tên lớp
- `teacher_profiles`: Lưu thông tin tương ứng với user của giáo viên
- `student_profiles`: Lưu thông tin tương ứng với user của sinh viên
    - `dob`: Ngày sinh
    - `code`: Mã số sinh viên
    - `class_id`: Lớp của sinh viên, trỏ đến ID tương ứng trong bảng `classes`
- `subjects`: Lưu thông tin các môn học
    - `name`: Tên môn
    - `code`: Mã môn
    - `semester`: Kỳ học
- `teacher_subject`: Lưu thông tin các giáo viên sẻ đảm nhận dạy môn học nào
    - `teacher_id`: Trỏ đến ID tương ứng trong bảng `teacher_profiles`
    - `subject_id`: Trỏ đến ID tương ứng trong bảng `subjects`
- `scores`: Lưu thông tin điểm của từng sinh viên với từng môn học
    - `student_id`: Trỏ đến ID tương ứng trong bảng `student_profiles`
    - `subject_id`: Trỏ đến ID tương ứng trong bảng `subjects`
    - `tp1`: Điểm thành phần 1
    - `tp2`: Điểm thành phần 2
    - `qt`: Điểm quá trình
    - `ck`: Điểm cuối kì
    - `tk`: Điểm tổng kết
- `request_edit_score`: Lưu các yêu cầu sửa điểm của sinh viên
    - `score_id`: Trỏ đến ID tương ứng trong bảng `scores`
    - `message`: Tin nhắn yêu cầu sửa điểm

### Tài khoản mặc định
- Sinh viên:
    - Tài khoản: `student`
    - Mật khẩu: `password`

- Giáo viên:
    - Tài khoản: `teacher`
    - Mật khẩu: `password`

# Install

## Create Project Framework

```
composer create-project --prefer-dist laravel/laravel QuanLySinhVien

php artisan serve

```

# Repo
https://github.com/Minhkl27/AdvanceWebDEV/tree/main


