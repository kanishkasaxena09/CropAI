from sqlalchemy import Column, Integer, String, TIMESTAMP, Text, func
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    email = Column(String(255), unique=True, index=True)
    password = Column(String(255))
    city = Column(String(255))
    state = Column(String(255))
    profile_photo = Column(Text)

class ContactMessage(Base):
    __tablename__ = "contact_messages"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    email = Column(String(255))
    message = Column(String(1000))

class ScanHistory(Base):
    __tablename__ = "scan_history"
    id = Column(Integer, primary_key=True, index=True)
    disease = Column(String(255))
    confidence = Column(String(50))
    created_at = Column(TIMESTAMP, server_default=func.now())

class OTPVerification(Base):
    __tablename__ = "otp_verifications"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), index=True)
    otp = Column(String(10))
    created_at = Column(TIMESTAMP, server_default=func.now())