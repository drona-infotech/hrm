from app.database import Base, engine

# Import ALL models here
from app.models.user import User

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")