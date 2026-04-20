# Diagrama de Flujo para las Soluciones

## 1. Restaurante Don Juan

flowchart TD
    A[Cliente llega o hace pedido] --> B[Mesero toma orden]
    B --> C[Sistema registra pedido]
    C --> D[Cocina recibe orden]
    D --> E{¿Hay ingredientes disponibles?}
    E -->|Sí| F[Cocina prepara platillos]
    E -->|No| G[Notificar falta de ingredientes]
    G --> H[Mesero informa al cliente]
    H --> B
    F --> I[Mesero recoge pedido]
    I --> J[Cliente recibe pedido]
    J --> K[Cliente consume]
    K --> L[Sistema genera cuenta]
    L --> M[Cliente paga]
    M --> N[Sistema registra pago]
    N --> O[Se actualiza caja]
    O --> P[Se guarda historial]
    P --> Q[Fin]

## 2. Clinica Dental

  flowchart TD
    A[Paciente solicita cita] --> B[Recepcionista agenda cita en sistema]
    B --> C[Sistema guarda datos del paciente]
    C --> D[Paciente llega a la clínica]
    D --> E[Recepción verifica cita]
    E --> F{¿Paciente registrado?}
    F -->|Sí| G[Odontólogo atiende consulta]
    F -->|No| H[Registrar nuevo paciente]
    H --> G
    G --> I[Se realiza diagnóstico]
    I --> J{¿Requiere tratamiento?}
    J -->|Sí| K[Definir tratamiento]
    J -->|No| L[Finalizar consulta]
    K --> M[Sistema registra tratamiento]
    M --> N[Sistema genera costo]
    N --> O[Paciente realiza pago]
    O --> P[Sistema registra pago]
    P --> Q[Se guarda historial clínico]
    Q --> R[Fin]
    L --> R
