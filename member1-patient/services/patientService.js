const patientService = {
  getProfile: async () => {
    return {
      success: true,
      data: {
        id: 1,
        name: "Patient",
        email: "patient@example.com",
        phone: "+91 98765 43210",
        dateOfBirth: "01 Jan 2000",
        gender: "Not Specified",
        bloodGroup: "O+",
        address: "Chennai, Tamil Nadu",
      },
    };
  },

  updateProfile: async (profileData) => {
    return {
      success: true,
      message: "Profile updated successfully",
      data: profileData,
    };
  },

  getAppointments: async () => {
    return {
      success: true,
      data: [
        {
          id: 1,
          doctorName: "Dr. Arun Kumar",
          department: "Cardiology",
          hospitalName: "MEDQ CARE Hospital",
          date: "28 Aug 2026",
          time: "10:30 AM",
          status: "Confirmed",
          tokenNumber: "A-024",
          appointmentType: "In-Person",
        },
        {
          id: 2,
          doctorName: "Dr. Priya Sharma",
          department: "Dermatology",
          hospitalName: "City Care Hospital",
          date: "30 Aug 2026",
          time: "02:00 PM",
          status: "Pending",
          tokenNumber: "D-015",
          appointmentType: "In-Person",
        },
      ],
    };
  },

  bookAppointment: async (appointmentData) => {
    return {
      success: true,
      message: "Appointment booked successfully",
      data: {
        id: Date.now(),
        ...appointmentData,
        status: "Pending",
      },
    };
  },

  cancelAppointment: async (appointmentId) => {
    return {
      success: true,
      message: "Appointment cancelled successfully",
      appointmentId,
    };
  },

  getQueue: async () => {
    return {
      success: true,
      data: {
        tokenNumber: "A-024",
        nowServing: "A-020",
        patientsAhead: 3,
        estimatedWaitTime: "15 mins",
        doctorName: "Dr. Arun Kumar",
        department: "Cardiology",
        room: "204",
        status: "WAITING",
      },
    };
  },

  getReports: async () => {
    return {
      success: true,
      data: [
        {
          id: 1,
          name: "Blood Test Report",
          type: "Laboratory",
          hospital: "MEDQ CARE Hospital",
          doctor: "Dr. Arun Kumar",
          date: "25 Aug 2026",
          status: "Available",
        },
        {
          id: 2,
          name: "ECG Report",
          type: "Cardiology",
          hospital: "MEDQ CARE Hospital",
          doctor: "Dr. Arun Kumar",
          date: "20 Aug 2026",
          status: "Available",
        },
      ],
    };
  },

  getNotifications: async () => {
    return {
      success: true,
      data: [
        {
          id: 1,
          title: "Appointment Confirmed",
          message:
            "Your appointment with Dr. Arun Kumar has been confirmed.",
          time: "10 minutes ago",
          type: "Appointment",
          read: false,
        },
        {
          id: 2,
          title: "Queue Update",
          message:
            "Your token A-024 is approaching. There are 3 patients ahead of you.",
          time: "20 minutes ago",
          type: "Queue",
          read: false,
        },
      ],
    };
  },
};

export default patientService;