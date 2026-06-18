from app.database import SessionLocal
from app.models.user import User
from app.utils.security import hash_password

print("1. Imports done")

db = SessionLocal()

print("2. DB Session Created")

hashed = hash_password("admin123")

print("3. Password Hashed")

admin = User(
    employee_id="SA001",
    full_name="Super Admin",
    email="admin@drona.com",
    password_hash=hashed,
    role="super_admin"
)

print("4. User Object Created")

db.add(admin)

print("5. Added To Session")

db.commit()

print("6. Commit Complete")

print("Super Admin Created")