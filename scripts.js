document.addEventListener('DOMContentLoaded', () => {
    const guardianForm = document.getElementById('guardian-form');
    if (guardianForm) {
        guardianForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const guardianName = document.getElementById('guardian-id').value;
            const childName = document.getElementById('child-id').value;
            const pickupTime = document.getElementById('pickup-time').value;
            document.getElementById('message').textContent = `Guardian ${guardianName} is authorized to pick up ${childName} at ${pickupTime}.`;
        });
    }

    const barcodeForm = document.getElementById('barcode-form');
    if (barcodeForm) {
        barcodeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const guardianId = document.getElementById('guardian-id').value;
            JsBarcode("#barcode", guardianId, {
                format: "CODE128",
                displayValue: true,
                fontSize: 18
            });
        });
    }
});
