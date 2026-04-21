---
title: Requisitos identificados
description: Requisitos funcionales derivados del análisis del caso principal.
---

# Requisitos identificados



## Ventas y cobros

### RQ-01: Registrar ventas

El sistema debe permitir registrar cada venta realizada en el restaurante, ya sea en mesa, para llevar o por delivery. Cada registro debe incluir productos vendidos, cantidades, precio total y forma de pago.

### RQ-06: Generar resumen básico de ventas

El sistema debe generar un resumen diario que incluya cantidad de pedidos, ingreso total, productos más vendidos y método de pago más utilizado.

### RQ-10: Registrar múltiples formas de pago en una misma venta

El sistema debe permitir que una misma cuenta sea cancelada usando distintas formas de pago y debe registrar correctamente cada parte del cobro.

## Inventario

### RQ-02: Mostrar inventario disponible

El sistema debe mostrar en todo momento el inventario actual de insumos y productos, de forma clara y fácil de consultar desde cualquier dispositivo autorizado.

### RQ-03: Alertar productos con baja existencia

El sistema debe enviar una alerta automática cuando un producto o insumo esté por acabarse, antes de llegar a cero existencias.

### RQ-05: Consultar productos por nombre

El sistema debe permitir buscar productos o insumos por nombre o por coincidencia parcial, mostrando resultados en menos de tres segundos.

## Pedidos y cocina

### RQ-04: Registrar pedidos pendientes

El sistema debe llevar control de los pedidos que siguen en preparación, los que están listos para servir y los ya entregados.

### RQ-07: Enviar pedidos a la cocina automáticamente

Cuando un mesero tome un pedido desde tableta o celular, el sistema debe enviarlo automáticamente a una pantalla visible en cocina, sin depender de un papel físico.

### RQ-08: Controlar tiempos de preparación

El sistema debe medir cuánto tiempo lleva cada pedido desde que se envía a cocina hasta que se marca como listo. Si supera los 20 minutos, debe mostrar una alerta.

## Menú y navegación del sistema

### RQ-09: Separar menú por categorías

El sistema debe organizar el menú por categorías como entradas, platos fuertes, postres y bebidas para facilitar la consulta por parte de meseros y clientes.

## Lectura general de los requisitos

- El mayor foco está en **reducir trabajo manual**.
- La prioridad operativa está en **pedidos, ventas e inventario**.
- El valor esperado es **menos errores, más orden y mejor tiempo de respuesta**.
