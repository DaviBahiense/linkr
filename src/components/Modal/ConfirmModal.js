import Swal from 'sweetalert2';

export default  async function confirmModal(callback) {
    Swal.fire({
        title: "Do you want to re-post this link?",
        showCancelButton: true,
        confirmButtonColor: "#1877F2",
        confirmButtonText: "Yes, delete it!",
        cancelButtonColor: "#FFFFFF",
        color: "#ffffff",
        background: "#333333"
    }).then((result) => {
        if (result.isConfirmed) {
            callback()
        }
    });
}
